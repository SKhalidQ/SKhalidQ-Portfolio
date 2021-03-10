import { Component } from '@angular/core';
import { ActivePageService } from 'src/app/Services/active-page.service';
import { LanguageService } from 'src/app/Services/language.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  animations: []
})
export class NotFoundComponent {

  errorMessage: string;
  errorCast = 'Parece que la página que buscabas no existe o el enlace no funciona.';
  errorCat = `Sembla que la pàgina que està buscant no existeix o l'enllaç no funciona.`;
  errorEng = `Looks like the page you were looking for doesn't exist or the link is broken.`;

  constructor(activePageService: ActivePageService, languageService: LanguageService) {
    activePageService.activePage.next('😥');
    languageService.currentLanguage$.subscribe(
      (response: string) => {
        if (response.startsWith('En')) {
          this.errorMessage = this.errorEng;
        } else if (response.startsWith('Cas')) {
          this.errorMessage = this.errorCast;
        } else if (response.startsWith('Cat')) {
          this.errorMessage = this.errorCat;
        }
      }
    );
  }

}
