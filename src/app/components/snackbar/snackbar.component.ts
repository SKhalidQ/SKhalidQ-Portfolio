import { Component, inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { SnackbarData } from 'src/app/models/interfaces/SnackbarData';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {
  private readonly snackRef = inject(MatSnackBarRef<SnackbarComponent>);
  readonly data = inject<SnackbarData>(MAT_SNACK_BAR_DATA);

  public dismiss(): void {
    this.snackRef.dismiss();
  }
}
