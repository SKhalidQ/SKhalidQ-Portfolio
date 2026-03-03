import { Component, Input } from '@angular/core';
import { BulletPoints, TechnicalSkill } from 'src/app/models/interfaces/curriculum';

@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.html',
  styleUrl: './bullet.component.scss'
})
export class BulletComponent {
  @Input() points?: BulletPoints[] | undefined;
  @Input() sections?: TechnicalSkill[] | undefined;
  @Input() title = '';
}
