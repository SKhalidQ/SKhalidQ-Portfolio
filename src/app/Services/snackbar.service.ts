import { MatSnackBar } from '@angular/material/snack-bar';
import { ThemeService } from './theme.service';
import { Injectable } from '@angular/core';

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
