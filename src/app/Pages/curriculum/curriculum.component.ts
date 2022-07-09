import { ActivePageService } from 'src/app/Services/active-page.service';
import { CurriculumModel, CurriculumEng, CurriculumCast, CurriculumCat } from 'src/app/Models/curriculum';
import { Animations } from 'src/app/app-animations';
import { Component, ElementRef, Input, OnDestroy } from '@angular/core';

import ActivePageEng from '../../../assets/JSON/English/ActivePage.json';
import ActivePageCast from '../../../assets/JSON/Castellano/ActivePage.json';
import ActivePageCat from '../../../assets/JSON/Catala/ActivePage.json';
import { LanguageService } from 'src/app/Services/language.service';

@Component({
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss'],
  animations: [Animations.fadeInOut]
})
export class CurriculumComponent implements OnDestroy {

  @Input() isModern: boolean | any;

  curriculum: CurriculumModel[] = CurriculumEng;
  triggerCount = 1;

  constructor(activePageService: ActivePageService, languageService: LanguageService, private elementRef: ElementRef) {
    languageService.currentLanguage$.subscribe( response => {      
      switch (response) {
        case 'English':
          this.curriculum = CurriculumEng;
          activePageService.activePage.next(ActivePageEng.curriculum);
          break;
        
        case 'Castellano': 
          this.curriculum = CurriculumCast;
          activePageService.activePage.next(ActivePageCast.curriculum);
          break
        
        case 'Català': 
          this.curriculum = CurriculumCat;
          activePageService.activePage.next(ActivePageCat.curriculum);
          break
      
        default:
          break;
      }
    });
  }

  SwitchCV(trigger: boolean) {
    this.triggerCount == 4 ? (this.isModern = trigger, this.triggerCount = 1) : this.triggerCount += 1;
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
  }

}
