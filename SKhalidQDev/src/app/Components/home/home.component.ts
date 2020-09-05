import { Component, OnInit } from '@angular/core';
import { PageNameService } from 'src/app/Services/page-name.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private pageName: PageNameService) { 
    this.pageName.sectionName.next('Home');
   }

  ngOnInit(): void {
  }

}
