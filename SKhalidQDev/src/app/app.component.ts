import { Component, OnInit } from '@angular/core';
import { faBeer, faList } from '@fortawesome/free-solid-svg-icons';
import { PageNameService } from './Services/page-name.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  title: string = 'SKhalidQDev';
  faBeer: any = faBeer;
  faList: any = faList;
  progress: boolean = false;
  iFrame: boolean = false;
  sectionName = "Home";

  constructor(public pageNameService: PageNameService) { this.pageNameService.sectionName.next('Home'); }

  onClick() {
    this.progress = false;
  }

  ngOnInit(): void {
    
  }
}
