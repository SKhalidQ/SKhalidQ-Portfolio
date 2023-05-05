import { ActivePageService } from 'src/app/Services/active-page.service';
import { LanguageService } from 'src/app/Services/language.service';
import { ThemeService } from 'src/app/Services/theme.service';
import { RouteLinksModel } from 'src/app/Models/route-links';
import { Animations } from 'src/app/app-animations';
import { HomeModel } from 'src/app/Models/home';
import { Component } from '@angular/core';

import RouteCast from 'src/assets/JSON/Castellano/Routes.json';
import RouteEng from 'src/assets/JSON/English/Routes.json';
import RouteCat from 'src/assets/JSON/Catala/Routes.json';

import ActivePageCast from '../../../assets/JSON/Castellano/ActivePage.json';
import ActivePageEng from '../../../assets/JSON/English/ActivePage.json';
import ActivePageCat from '../../../assets/JSON/Catala/ActivePage.json';

import HomeCast from '../../../assets/JSON/Castellano/Home.json';
import HomeEng from '../../../assets/JSON/English/Home.json';
import HomeCat from '../../../assets/JSON/Catala/Home.json';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [Animations.topFadeIn2, Animations.fade]
})
export class HomeComponent {

  homeData: HomeModel | any;
  routeData: RouteLinksModel | any;

  darkCV = 'https://drive.google.com/uc?export=view&id=1YRuP0d49ETPfLQLAE4Gy1PYIdYiAAyzq';
  lightCV = 'https://drive.google.com/uc?export=view&id=1pvh1migpptljT8ZnDIokWrmGAzBOswlz';
  darkProject = 'https://drive.google.com/uc?export=view&id=1pgwJ2B6kaw5zPpnWcqHFcGwvMDCjIrx3';
  lightProject = 'https://drive.google.com/uc?export=view&id=1s13gdD_pafMo1uw50Ya18itFQYG-Ih4F';

  constructor(
    activePageService: ActivePageService,
    public themeService: ThemeService,
    languageService: LanguageService) {
    activePageService.activePage.next(ActivePageEng.home);

    languageService.currentLanguage$.subscribe(
      (response: string) => {
        if (response.startsWith('En')) {
          this.homeData = HomeEng;
          this.routeData = RouteEng;
          activePageService.activePage.next(ActivePageEng.home);
        } else if (response.startsWith('Cas')) {
          this.homeData = HomeCast;
          this.routeData = RouteCast;
          activePageService.activePage.next(ActivePageCast.home);
        } else if (response.startsWith('Cat')) {
          this.homeData = HomeCat;
          this.routeData = RouteCat;
          activePageService.activePage.next(ActivePageCat.home);
        }
      }
    );
  }

}
