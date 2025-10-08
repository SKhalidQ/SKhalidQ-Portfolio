import { Component, Input } from '@angular/core';
import { TechnicalSkill } from 'src/app/models/interfaces/Curriculum';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() list: TechnicalSkill[] = [];
  @Input() title = '';
}
