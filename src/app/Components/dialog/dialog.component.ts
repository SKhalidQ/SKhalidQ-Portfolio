import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDataModel } from 'src/app/Models/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogDataModel) { }
}
