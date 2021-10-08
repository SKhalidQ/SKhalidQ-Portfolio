import { ActivePageService } from 'src/app/Services/active-page.service';
import { CurriculumModel, CurriculumEng, CurriculumCast } from 'src/app/Models/curriculum';
import { Animations } from 'src/app/app-animations';
import { Component, Input } from '@angular/core';

import ActivePageEng from '../../../assets/JSON/English/ActivePage.json';
import { LanguageService } from 'src/app/Services/language.service';

@Component({
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss'],
  animations: [Animations.fadeInOut]
})
export class CurriculumComponent {

  @Input() isModern: boolean | any;

  curriculum: CurriculumModel[] = CurriculumEng;
  triggerCount = 1;

  constructor(activePageService: ActivePageService, languageService: LanguageService) {
    activePageService.activePage.next(ActivePageEng.curriculum);

    languageService.currentLanguage$.subscribe( response => {
      switch (response) {
        case 'English':
          this.curriculum = CurriculumEng
          break;
        
        case 'Castellano': 
          this.curriculum = CurriculumCast;
          break
      
        default:
          break;
      }
    });
  }

  SwitchCV(trigger: boolean) {
    this.triggerCount == 4 ? (this.isModern = trigger, this.triggerCount = 1) : this.triggerCount += 1;
  }

}
