import { ActivePageService } from 'src/app/Services/active-page.service';
import { LanguageService } from 'src/app/Services/language.service';
import { Component } from '@angular/core';

import ActivePageCast from '../../../assets/JSON/Castellano/ActivePage.json';
import ActivePageEng from '../../../assets/JSON/English/ActivePage.json';
import ActivePageCat from '../../../assets/JSON/Catala/ActivePage.json';
import { ThemeService } from 'src/app/Services/theme.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  buttonText: string | any;

  constructor(activePageService: ActivePageService, languageService: LanguageService, public themeService: ThemeService, private route: Router) {

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

  ChangeColour() {    
    if (this.themeService.themeMode.getValue() == 'LightMode') {
      return 'light-theme';
    } else if (this.themeService.themeMode.getValue() == 'DarkMode') {
      return 'dark-theme';
    } else {
      return '';
    }
  }

  Navigate(): void {
    window.location.href = 'https://www.skhalidq.dev';
  }
}
