import { Component, OnInit } from '@angular/core';
import { ActivePageService } from 'src/app/Services/ActivePage/active-page.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private activePageService: ActivePageService) {
    activePageService.activePage.next('Projects');
  }

  ngOnInit(): void {
  }

}
