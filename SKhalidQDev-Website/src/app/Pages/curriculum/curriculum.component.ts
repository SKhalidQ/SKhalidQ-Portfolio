import { Curriculum, CurriculumModel } from 'src/app/Models/curriculum';
import { ActivePageService } from 'src/app/Services/active-page.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent {

  curriculum: CurriculumModel[] = Curriculum;

  constructor(activePageService: ActivePageService) {
    activePageService.activePage.next('Curriculum Vitae');
  }

}
