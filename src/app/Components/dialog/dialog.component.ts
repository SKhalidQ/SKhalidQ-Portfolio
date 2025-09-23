import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { DialogDataModel } from 'src/app/Models/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  standalone: false
})
export class DialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogDataModel) { }
}
