import { ActivePageService } from 'src/app/Services/active-page.service';
import { Curriculum, CurriculumModel } from 'src/app/Models/curriculum';
import { Animations } from 'src/app/app-animations';
import { Component, Input } from '@angular/core';

import ActivePageEng from '../../../assets/JSON/English/ActivePage.json';

@Component({
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss'],
  animations: [Animations.fadeInOut]
})
export class CurriculumComponent {

  @Input() isModern: boolean | any;

  curriculum: CurriculumModel[] = Curriculum;
  triggerCount = 1;

  constructor(activePageService: ActivePageService) {
    activePageService.activePage.next(ActivePageEng.curriculum);
  }

  SwitchCV(trigger: boolean) {
    this.triggerCount == 4 ? (this.isModern = trigger, this.triggerCount = 1) : this.triggerCount += 1;
  }

}
