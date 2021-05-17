import { ActivePageService } from 'src/app/Services/active-page.service';
import { LanguageService } from 'src/app/Services/language.service';
import { ProjectModel } from 'src/app/Models/projects';
import { Component, OnInit, Output } from '@angular/core';

import ProjectsCast from '../../../assets/JSON/Castellano/Projects.json';
import ProjectsEng from '../../../assets/JSON/English/Projects.json';
import ProjectsCat from '../../../assets/JSON/Catala/Projects.json';

import ActivePageCast from '../../../assets/JSON/Castellano/ActivePage.json';
import ActivePageEng from '../../../assets/JSON/English/ActivePage.json';
import ActivePageCat from '../../../assets/JSON/Catala/ActivePage.json';
import { Animations } from 'src/app/app-animations';
import { fromEvent, merge, Observable } from 'rxjs';

@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [Animations.topFadein]
})
export class ProjectsComponent implements OnInit {

  displaySize: string | any;
  projects: ProjectModel[] = ProjectsEng;

  constructor(activePageService: ActivePageService, languageService: LanguageService) {
    languageService.currentLanguage$.subscribe(
      (response: string) => {
        if (response.startsWith('En')) {
          this.projects = ProjectsEng;
          activePageService.activePage.next(ActivePageEng.projects);
        } else if (response.startsWith('Cas')) {
          this.projects = ProjectsCast;
          activePageService.activePage.next(ActivePageCast.projects);
        } else if (response.startsWith('Cat')) {
          this.projects = ProjectsCat;
          activePageService.activePage.next(ActivePageCat.projects);
        }
      }
    );
  }

  ngOnInit(): void {
    this.displaySize = window.innerHeight + ' x ' + window.innerWidth.toString();
  }

}
