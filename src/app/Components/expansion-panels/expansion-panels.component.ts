import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expansion-panels',
  templateUrl: './expansion-panels.component.html',
  styleUrls: ['./expansion-panels.component.scss']
})
export class ExpansionPanelsComponent {

  @Input() data: any;

  constructor() { }

}
