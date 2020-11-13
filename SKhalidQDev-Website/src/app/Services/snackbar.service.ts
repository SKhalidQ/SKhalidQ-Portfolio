import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar: MatSnackBar) { }

  OpenSnackbar(message: string, action: string, theme: string): void {
    this.snackbar.open(message, action, {
      duration: 3000,
      panelClass: [theme],
    });
  }

  EVOLUTION(): void {
    this.snackbar.open('EVOLUTION!', 'EVOLUTION', {
      duration: 1500,
      panelClass: ['EVOLUTION'],
    });
  }
}
