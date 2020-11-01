import { Component, Input, OnInit } from '@angular/core';
import { Projects } from 'src/app/Models/projects';
import { ActivePageService } from 'src/app/Services/active-page.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  constructor(private activePageService: ActivePageService) {
    activePageService.activePage.next('Projects');
  }

  projects = Projects;

}
