import { Component, Input } from '@angular/core';
import { Hobbies } from 'src/app/models/interfaces/Curriculum';

@Component({
  selector: 'app-icon-rail',
  templateUrl: './icon-rail.component.html',
  styleUrls: ['./icon-rail.component.scss']
})
export class IconRailComponent {
  @Input() hobbies: Hobbies[] = [];
  @Input() title: string = '';
}
