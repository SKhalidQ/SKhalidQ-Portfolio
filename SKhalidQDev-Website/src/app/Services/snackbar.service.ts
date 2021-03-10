import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { ThemeService } from './theme.service';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar: MatSnackBar, private themeService: ThemeService) { }

  OpenSnackbar(message: string, action: string): void {
    this.snackbar.open(message, action, {
      duration: 3000,
      panelClass: [this.themeService.themeMode.value],
    });
  }

  EVOLUTION(): void {
    this.snackbar.open('EVOLUTION!', 'EVOLUTION', {
      duration: 1500,
      panelClass: ['EVOLUTION'],
    });
  }
}
