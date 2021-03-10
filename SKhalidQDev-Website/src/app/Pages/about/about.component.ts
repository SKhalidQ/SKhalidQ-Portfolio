import { ActivePageService } from 'src/app/Services/active-page.service';
import { environment } from 'src/environments/environment.prod';
import { Component, OnInit } from '@angular/core';

import ActivePageCast from '../../../assets/JSON/Castellano/ActivePage.json';
import ActivePageEng from '../../../assets/JSON/English/ActivePage.json';
import ActivePageCat from '../../../assets/JSON/Catala/ActivePage.json';

import { LanguageService } from 'src/app/Services/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: []
})
export class AboutComponent implements OnInit {

  applicationVersion: string = environment.appVersion;
  buttonText: string;

  constructor(activePageService: ActivePageService, languageService: LanguageService) {

    languageService.currentLanguage$.subscribe(
      (response: string) => {
        if (response.startsWith('En')) {
          activePageService.activePage.next(ActivePageEng.about);
          this.buttonText = ActivePageEng.changelog;
        } else if (response.startsWith('Cas')) {
          activePageService.activePage.next(ActivePageCast.about);
          this.buttonText = ActivePageCast.changelog;
        } else if (response.startsWith('Cat')) {
          activePageService.activePage.next(ActivePageCat.about);
          this.buttonText = ActivePageCat.changelog;
        }
      }
    );
  }

  ngOnInit(): void {
  }
}
