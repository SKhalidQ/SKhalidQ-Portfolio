import { Component, OnInit } from '@angular/core';
import { ActivePageService } from 'src/app/Services/ActivePage/active-page.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private activePageService: ActivePageService) {
    activePageService.activePage.next('About');
  }

  ngOnInit(): void {
  }

}
