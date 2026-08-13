import { Component, inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { SnackbarData } from 'src/app/models/interfaces/snackbar-data';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
/**
 * @description
 * Presentational component used as the content of all application snackbars.
 * Displays a message and an action button, and applies the correct theme class
 * via the `panelClass` set by {@link SnackbarService}.
 */
export class SnackbarComponent {
  private readonly snackRef = inject(MatSnackBarRef<SnackbarComponent>);
  /** Injected snackbar data containing the message, action label, and CSS class. */
  readonly data = inject<SnackbarData>(MAT_SNACK_BAR_DATA);

  /**
   * @description
   * Programmatically dismisses the snackbar.
   * Bound to the action button in the template.
   * @returns {void}
   */
   dismiss(): void {
    this.snackRef.dismiss();
  }
}
