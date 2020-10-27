import { Component, OnInit } from '@angular/core';
import { EducationEng, EmploymentEng, Hobbies, TechnicalSkills, CVTItlesEng, LanguagesEng } from 'src/app/Models/curriculum-Models';
import { ActivePageService } from 'src/app/Services/ActivePage/active-page.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

  _skills = TechnicalSkills;
  _qualifications = EducationEng;
  _jobs = EmploymentEng;
  _hobbies = Hobbies;
  _titles = CVTItlesEng;
  _languages = LanguagesEng;


  constructor(activePageService: ActivePageService) {
    activePageService.activePage.next('Curriculum Vitae');
    console.log(this._qualifications[1].Modules);
  }

  ngOnInit(): void {
  }

}