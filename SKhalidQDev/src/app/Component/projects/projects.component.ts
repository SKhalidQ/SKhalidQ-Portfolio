import { Component, OnInit } from '@angular/core';
import { faBeer, faList } from '@fortawesome/free-solid-svg-icons';
import { PageNameService } from 'src/app/Services/page-name.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  faBeer: any = faBeer;
  faList: any = faList;
  progress: boolean = false;
  iFrame: boolean = false;
  
  constructor(private pageName: PageNameService) { 
    this.pageName.sectionName.next('Projects');
   }
  
  onClick() {
    this.progress = false;
  }

  ngOnInit(): void {
    
  }

}
