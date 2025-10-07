import { Component, inject, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {
  private readonly snackRef = inject(MatSnackBarRef<any>);

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  public dismiss(): void {
    this.snackRef.dismiss();
  }
}
