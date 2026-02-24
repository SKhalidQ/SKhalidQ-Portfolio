import { Component, Input } from '@angular/core';
import { ExtendedBulletPoints } from 'src/app/models/interfaces/curriculum';

@Component({
  selector: 'app-extended-bullet-point',
  templateUrl: './extended-bullet-point.component.html',
  styleUrl: './extended-bullet-point.component.scss'
})
export class ExtendedBulletPointComponent {
  @Input() title = '';
  @Input() sections: ExtendedBulletPoints[] = [];
}
