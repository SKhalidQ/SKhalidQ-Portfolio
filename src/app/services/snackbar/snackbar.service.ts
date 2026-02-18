import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/components/snackbar/snackbar.component';
import { ThemeMode } from 'src/app/models/enums/theme-mode';
import { SnackbarData } from 'src/app/models/interfaces/snackbar-data';
import { ThemeService } from '../theme/theme.service';

@Injectable({
  providedIn: 'root'
})
/**
 * @description
 * Service that manages application-wide snackbar notifications.
 * Automatically applies the correct theme class so snackbars match
 * the active light/dark theme.
 */
export class SnackbarService {
  private readonly snackbar = inject(MatSnackBar);
  private readonly themeService = inject(ThemeService);

  /**
   * @description Opens a themed snackbar notification.
   * @param {string} message - The main message text (translation key or plain string).
   * @param {string} action - The label for the dismiss action button.
   * @returns {void}
   */
  openSnackbar(message: string, action: string): void {
    const snackbarStyleClass = this.themeMenuIcon;

    this.snackbar.openFromComponent(SnackbarComponent, {
      data: {
        message: message,
        action: action,
        class: snackbarStyleClass
      },
      duration: 3000,
      panelClass: snackbarStyleClass,
    });
  }

  /**
   * @description
   * Triggers the easter-egg snackbar with special styling.
   * Called by {@link EvolutionService} when the easter egg is activated.
   * @returns {void}
   */
  EVOLUTION(): void {
    const snackbarData: SnackbarData = {
      message: 'EVOLUTION!',
      action: 'EVOLUTION',
      class: 'EVOLUTION'
    };

    this.snackbar.openFromComponent(SnackbarComponent, {
      data: snackbarData,
      duration: 1500,
      panelClass: 'EVOLUTION',
    });
  }

  /**
   * @description
   * Returns the CSS panel class to apply to snackbar components based on
   * the currently active effective theme.
   * @returns {string} `'snackbar-dark'` for dark mode, `'snackbar-light'` for light mode.
   */
  get themeMenuIcon(): string {
    const currentTheme = this.themeService.getEffectiveThemeMode();

    switch (currentTheme) {
      case ThemeMode.DarkMode:
        return 'snackbar-dark';
      case ThemeMode.LightMode:
        return 'snackbar-light';
      case ThemeMode.SystemDefault:
        return this.themeService.getSystemPreferredTheme() === ThemeMode.DarkMode ? 'snackbar-dark' : 'snackbar-light';
    }
  }
}
