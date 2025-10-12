import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThemeMode } from 'src/app/models/enums/theme-mode';
import { ThemeService } from '../theme/theme.service';
import { SnackbarComponent } from 'src/app/components/snackbar/snackbar.component';
import { SnackbarData } from 'src/app/models/interfaces/snackbar-data';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  private readonly snackbar = inject(MatSnackBar);
  private readonly themeService = inject(ThemeService);

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

  get themeMenuIcon(): string {
    const currentTheme = this.themeService.themeMode.value;

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
