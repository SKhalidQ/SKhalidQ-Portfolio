import { Component, Input } from '@angular/core';
import { History } from 'src/app/models/interfaces/Curriculum';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  @Input() history: History[] = [];
  @Input() title: string = '';
}
