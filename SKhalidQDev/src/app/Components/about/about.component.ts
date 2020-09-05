import { Component, OnInit } from '@angular/core';
import { PageNameService } from 'src/app/Services/page-name.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private pageNameservice: PageNameService) { 
    pageNameservice.sectionName.next('About');
   }

  ngOnInit(): void {
  }

}
