import { ActivePageService } from 'src/app/Services/active-page.service';
import { ProjectModel } from 'src/app/Models/projects';
import { Animations } from 'src/app/Themes/animations';
import { Component } from '@angular/core';

import ProjectsJson from '../../../assets/JSON/Projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [Animations.topFadein]
})
export class ProjectsComponent {

  constructor(activePageService: ActivePageService) {
    activePageService.activePage.next('Projects');
  }

  projects: ProjectModel[] = ProjectsJson;
}
