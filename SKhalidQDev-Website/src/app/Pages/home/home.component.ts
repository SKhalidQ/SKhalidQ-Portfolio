import { ActivePageService } from 'src/app/Services/active-page.service';
import { Component } from '@angular/core';
import { Projects } from 'src/app/Models/projects';
import { Curriculum, CurriculumModel } from 'src/app/Models/curriculum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  project = Projects[2];
  cv: CurriculumModel[] = Curriculum;

  constructor(activePageService: ActivePageService) {
    activePageService.activePage.next('Home');
  }

}
