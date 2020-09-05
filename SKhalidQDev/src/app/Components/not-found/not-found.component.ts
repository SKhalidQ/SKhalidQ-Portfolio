import { Component, OnInit } from '@angular/core';
import { PageNameService } from 'src/app/Services/page-name.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private pageName: PageNameService) { 
    this.pageName.sectionName.next('Not found');
   }

  ngOnInit(): void {
  }

}
