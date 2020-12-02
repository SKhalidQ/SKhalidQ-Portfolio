import { ActivePageService } from 'src/app/Services/active-page.service';
import { Component } from '@angular/core';
import { Projects } from 'src/app/Models/projects';
import { Curriculum, CurriculumModel } from 'src/app/Models/curriculum';
import { Animations } from 'src/app/Themes/animations';
import { CVImgService } from 'src/app/Services/Theme/cv-img.service';
import { ProjectImgService } from 'src/app/Services/Theme/project-img.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [Animations.topFadeIn2, Animations.fade]
})
export class HomeComponent {

  project = Projects[2];
  cv: CurriculumModel[] = Curriculum;

  constructor(activePageService: ActivePageService, public cvImgService: CVImgService, public projectImgService: ProjectImgService) {
    activePageService.activePage.next('Home');
  }

}
