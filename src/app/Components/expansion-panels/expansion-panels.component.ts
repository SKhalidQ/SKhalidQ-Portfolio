import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expansion-panels',
  templateUrl: './expansion-panels.component.html',
  styleUrls: ['./expansion-panels.component.scss'],
  standalone: false
})
export class ExpansionPanelsComponent {

  @Input() data: any;

  constructor() { }

}
