import { inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { BehaviorSubject, filter, fromEvent, map, merge, Observable } from 'rxjs';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { DialogData } from 'src/app/models/interfaces/dialog-data';
import { SnackbarService } from '../snackbar/snackbar.service';
import { ThemeService } from '../theme/theme.service';

@Injectable({
  providedIn: 'root'
})
/**
 * @description
 * Service that monitors network connectivity and service-worker update
 * availability, surfacing both as user-facing dialogs.
 *
 * - Listens for `online`/`offline` window events and shows a blocking dialog
 *   when the connection is lost.
 * - Subscribes to Angular's {@link SwUpdate} to notify users when a new app
 *   version is ready and reloads after confirmation.
 * - Automatically unregisters any stale service worker when SW is not enabled
 *   (i.e. in development mode) to prevent spurious reload loops.
 */
export class SiteStatusService {
  private readonly baseTranslationKey = 'aboutPage.checkUpdatesDialog';
  private readonly swUpdate = inject(SwUpdate);
  private readonly dialog = inject(MatDialog);
  private readonly themeService = inject(ThemeService);
  private readonly snackbarService = inject(SnackbarService);

  /** BehaviorSubject tracking the current online/offline state. */
  private readonly isOnline$ = new BehaviorSubject<boolean>(navigator.onLine);
  /** Reference to the currently open offline dialog, used to avoid duplicates. */
  private dialogRef!: MatDialogRef<DialogComponent>;

  /**
   * @description
   * Bootstraps the connection listener, the SW update checker,
   * and the stale-SW cleanup on service initialisation.
   */
  constructor() {
    this.initializeConnectionListener();
    this.checkUpdates();
    this.clearStaleServiceWorker();
  }

  /**
   * @description
   * Sets up listeners for the browser `online` and `offline` window events.
   * Shows the offline dialog when connectivity is lost and closes it
   * (with a snackbar confirmation) when it is restored.
   * @returns {void}
   */
  private initializeConnectionListener(): void {
    const online$ = fromEvent(window, 'online').pipe(map(() => true));
    const offline$ = fromEvent(window, 'offline').pipe(map(() => false));

    merge(online$, offline$).subscribe(isOnline => {
      this.isOnline$.next(isOnline);

      if (!isOnline && !this.dialogRef) {
        this.showOfflineDialog();
      } else if (isOnline && this.dialogRef) {
        this.closeOfflineDialog();
        this.snackbarService.openSnackbar('snackbar.connectionRestored', 'snackbar.dismiss');
      }
    });
  }

  /**
   * @description
   * Opens a non-dismissible dialog informing the user that the connection
   * has been lost. Stores the reference in {@link dialogRef} to prevent
   * duplicate dialogs and to allow programmatic closing.
   * @returns {void}
   */
  private showOfflineDialog(): void {
    const dialogData: DialogData = {
      title: `${this.baseTranslationKey}.lostConnection.title`,
      message: `${this.baseTranslationKey}.lostConnection.message`,
      actions: {
        negative: `${this.baseTranslationKey}.action.close`
      }
    };

    this.dialogRef = this.dialog.open(DialogComponent, {
      disableClose: true,
      panelClass: [this.themeService.getEffectiveThemeMode()],
      data: dialogData
    });
  }

  /**
   * @description Programmatically closes the offline dialog if one is currently open.
   * @returns {void}
   */
  private closeOfflineDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  /**
   * @description Returns an observable that emits `true` when online and `false` when offline.
   * @returns {Observable<boolean>} An {@link Observable} of the current connection state.
   */
  getConnectionStatus(): Observable<boolean> {
    return this.isOnline$.asObservable();
  }

  /**
   * @description Synchronously returns the current online state.
   * @returns {boolean} `true` if the browser is online, `false` otherwise.
   */
  isOnline(): boolean {
    return this.isOnline$.value;
  }

  /**
   * @description
   * Unregisters any previously cached service worker when SW updates are not
   * enabled (i.e. in development mode).
   *
   * This prevents a stale SW — registered during a previous production-mode
   * local run — from intercepting network requests and firing spurious
   * `VERSION_READY` events that cause repeated page reloads during development.
   *
   * This method is a no-op in production (where `swUpdate.isEnabled` is `true`)
   * and in environments without Service Worker support.
   * @returns {void}
   */
  private clearStaleServiceWorker(): void {
    if (this.swUpdate.isEnabled || !('serviceWorker' in navigator)) {
      return;
    }

    navigator.serviceWorker.getRegistrations().then(registrations => {
      registrations.forEach(registration => registration.unregister());
    });
  }

  /**
   * @description
   * Subscribes to Angular's SW version update stream.
   * When a new version is ready, opens a dialog prompting the user to reload.
   * On confirmation, activates the update and performs a full page reload.
   * This method is a no-op when the service worker is not enabled.
   * @returns {void}
   */
  checkUpdates(): void {
    if (!this.swUpdate.isEnabled) {
      return;
    }

    this.swUpdate.versionUpdates
      .pipe(filter((event): event is VersionReadyEvent => event.type === 'VERSION_READY'))
      .subscribe(() => {
        const dialogData: DialogData = {
          title: `${this.baseTranslationKey}.newUpdate.title`,
          message: `${this.baseTranslationKey}.newUpdate.message`,
          actions: {
            negative: `${this.baseTranslationKey}.action.cancel`,
            positive: `${this.baseTranslationKey}.action.update`
          }
        };

        this.showUpdateDialog(dialogData);
    });
  }

  /**
   * @description
   * Manually triggers a service worker update check.
   * Called by the user from the About page.
   * Opens an appropriate dialog regardless of the result:
   * - Update available → prompts user to reload.
   * - No update → informs the user the app is up to date.
   * - SW disabled → informs the user that updates are unavailable in this build.
   * - Error → informs the user that the check failed.
   * @returns {void}
   */
  manualUpdateCheck(): void {
    if (!this.swUpdate.isEnabled) {
      const dialogData: DialogData = {
        title: `${this.baseTranslationKey}.disabledUpdate.title`,
        message: `${this.baseTranslationKey}.disabledUpdate.message`,
        actions: {
          negative: `${this.baseTranslationKey}.action.close`
        }
      };
      this.showUpdateDialog(dialogData);

      return;
    }

    this.swUpdate.checkForUpdate()
      .then(updateAvailable => {
        const updateKey = updateAvailable ? `${this.baseTranslationKey}.newUpdate` : `${this.baseTranslationKey}.noNewUpdate`;

        const dialogData: DialogData = {
          title: `${updateKey}.title`,
          message: `${updateKey}.message`,
          actions: {
            negative: `${this.baseTranslationKey}.action.cancel`,
            positive: updateAvailable ? `${this.baseTranslationKey}.action.update` : undefined
          },
          reloadOnClose: updateAvailable
        };

        this.showUpdateDialog(dialogData);
      })
      .catch(() => {
        const errorKey = `${this.baseTranslationKey}.updateError`;
        const dialogData: DialogData = {
          title: `${errorKey}.title`,
          message: `${errorKey}.message`,
          actions: {
            negative: `${this.baseTranslationKey}.action.close`
          }
        };
        this.showUpdateDialog(dialogData);
      });
  }

  /**
   * @description Opens an informational dialog with optional reload-on-close behaviour.
   * @param {string} title - Translation key for the dialog title.
   * @param {string} message - Translation key for the dialog message body.
   * @param {string} [action='Close'] - Translation key for the dismiss action label.
   * @param {boolean} [shouldReload=false] - When `true`, triggers a full page reload after the dialog is closed.
   * @returns {void}
   */
  private showUpdateDialog(dialogData: DialogData): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: dialogData,
      panelClass: [this.themeService.getEffectiveThemeMode()],
    });

    if (dialogData.reloadOnClose) {
      dialogRef.afterClosed().subscribe((result: boolean) => {
        if (result) {
          document.location.reload();
        }
      });
    }
  }
}
