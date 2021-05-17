import { Curriculum, CurriculumModel } from 'src/app/Models/curriculum';
import { ActivePageService } from 'src/app/Services/active-page.service';
import { Animations } from 'src/app/Themes/animations';
import { Component } from '@angular/core';

import ActivePageEng from '../../../assets/JSON/English/ActivePage.json';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css'],
  animations: [Animations.fade]
})
export class CurriculumComponent {

  curriculum: CurriculumModel[] = Curriculum;

  isModern: boolean = false;
  toggleText = "Modern";

  constructor(activePageService: ActivePageService) {
    activePageService.activePage.next(ActivePageEng.curriculum);
  }

  switchCV() {
    if (this.isModern == true) {
      this.toggleText = 'Modern';
      this.isModern = false;
    } else {
      this.toggleText = "Classic";
      this.isModern = true;
    }
  }

}
