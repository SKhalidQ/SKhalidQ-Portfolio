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
export class SiteStatusService {
  private readonly swUpdate = inject(SwUpdate);
  private readonly dialog = inject(MatDialog);
  private readonly themeService = inject(ThemeService);
  private readonly snackbarService = inject(SnackbarService);

  private readonly isOnline$ = new BehaviorSubject<boolean>(navigator.onLine);
  private dialogRef!: MatDialogRef<DialogComponent>;

  constructor() {
    this.initializeConnectionListener();
    this.checkUpdates();
    this.clearStaleServiceWorker();
  }

  private initializeConnectionListener(): void {
    const online$ = fromEvent(window, 'online').pipe(map(() => true));
    const offline$ = fromEvent(window, 'offline').pipe(map(() => false));

    merge(online$, offline$).subscribe(isOnline => {
      this.isOnline$.next(isOnline);

      if (!isOnline && !this.dialogRef) {
        this.showOfflineDialog();
      } else if (isOnline && this.dialogRef) {
        this.closeOfflineDialog();
        this.snackbarService.openSnackbar('Connection restored', 'Dismiss');
      }
    });
  }

  private showOfflineDialog(): void {
    const dialogData: DialogData = {
      title: 'Lost connection',
      message: 'It seems like you have lost connection. Some features might not be accessible.',
      action: 'Close'
    };

    this.dialogRef = this.dialog.open(DialogComponent, {
      disableClose: true,
      panelClass: [this.themeService.getEffectiveThemeMode()],
      data: dialogData
    });
  }

  private closeOfflineDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  getConnectionStatus(): Observable<boolean> {
    return this.isOnline$.asObservable();
  }

  isOnline(): boolean {
    return this.isOnline$.value;
  }

  private clearStaleServiceWorker(): void {
    if (this.swUpdate.isEnabled || !('serviceWorker' in navigator)) {
      return;
    }

    navigator.serviceWorker.getRegistrations().then(registrations => {
      registrations.forEach(registration => registration.unregister());
    });
  }

  checkUpdates(): void {
    if (!this.swUpdate.isEnabled) {
      return;
    }

    this.swUpdate.versionUpdates
      .pipe(filter((event): event is VersionReadyEvent => event.type === 'VERSION_READY'))
      .subscribe(() => {
        const dialogData: DialogData = {
          title: 'aboutPage.checkUpdatesDialog.newUpdate.title',
          message: 'aboutPage.checkUpdatesDialog.newUpdate.message',
          action: 'aboutPage.checkUpdatesDialog.newUpdate.action'
        };

        this.dialog.open(DialogComponent, {
          data: dialogData,
          panelClass: [this.themeService.getEffectiveThemeMode()],
        }).afterClosed().subscribe(() => {
          this.swUpdate.activateUpdate().then(() => document.location.reload());
        });
    });
  }

  // Method to manually check for updates
  manualUpdateCheck(): void {
    if (!this.swUpdate.isEnabled) {
      this.showUpdateDialog('aboutPage.checkUpdatesDialog.disabledUpdate.title', 'aboutPage.checkUpdatesDialog.disabledUpdate.message', 'aboutPage.checkUpdatesDialog.disabledUpdate.action');
      return;
    }

    this.swUpdate.checkForUpdate()
      .then(updateAvailable => {
        const dialogConfig = updateAvailable
          ? { title: 'aboutPage.checkUpdatesDialog.newUpdate.title', message: 'aboutPage.checkUpdatesDialog.newUpdate.message', action: 'aboutPage.checkUpdatesDialog.newUpdate.action', reload: true }
          : { title: 'aboutPage.checkUpdatesDialog.noNewUpdate.title', message: 'aboutPage.checkUpdatesDialog.noNewUpdate.message', action: 'aboutPage.checkUpdatesDialog.noNewUpdate.action' };

        this.showUpdateDialog(dialogConfig.title, dialogConfig.message, dialogConfig.action, dialogConfig.reload);
      })
      .catch(() => {
        this.showUpdateDialog('aboutPage.checkUpdatesDialog.updateError.title', 'aboutPage.checkUpdatesDialog.updateError.message', 'aboutPage.checkUpdatesDialog.updateError.action');
      });
  }

  private showUpdateDialog(title: string, message: string, action = 'Close', shouldReload = false): void {
    const dialogData: DialogData = { title, message, action };

    const dialogRef = this.dialog.open(DialogComponent, {
      data: dialogData,
      panelClass: [this.themeService.getEffectiveThemeMode()],
    });

    if (shouldReload) {
      dialogRef.afterClosed().subscribe(() => document.location.reload());
    }
  }
}
