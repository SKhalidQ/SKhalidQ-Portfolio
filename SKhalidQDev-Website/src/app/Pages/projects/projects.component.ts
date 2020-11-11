import { Component, Input, OnInit } from '@angular/core';
import { ActivePageService } from 'src/app/Services/active-page.service';
import { Projects } from 'src/app/Models/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  constructor(activePageService: ActivePageService) {
    activePageService.activePage.next('Projects');
  }

  projects = Projects;

}
