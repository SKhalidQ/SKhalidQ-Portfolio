import { Component, OnInit } from '@angular/core';
import { PageNameService } from 'src/app/Services/page-name.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

  constructor(private pageName: PageNameService) { 
    this.pageName.sectionName.next('Curriculum Vitae');
   }

  ngOnInit(): void {
  }

}
