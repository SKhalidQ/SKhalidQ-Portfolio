import { ProjectImgService } from 'src/app/Services/Theme/project-img.service';
import { ActivePageService } from 'src/app/Services/active-page.service';
import { Curriculum, CurriculumModel } from 'src/app/Models/curriculum';
import { CVImgService } from 'src/app/Services/Theme/cv-img.service';
import { Animations } from 'src/app/Themes/animations';
import { ProjectModel } from 'src/app/Models/projects';
import { Component } from '@angular/core';

import ProjectsJson from '../../../assets/JSON/Projects.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [Animations.topFadeIn2, Animations.fade]
})
export class HomeComponent {

  project: ProjectModel = ProjectsJson[2];
  cv: CurriculumModel[] = Curriculum;

  constructor(activePageService: ActivePageService, public cvImgService: CVImgService, public projectImgService: ProjectImgService) {
    activePageService.activePage.next('Home');
  }

}
