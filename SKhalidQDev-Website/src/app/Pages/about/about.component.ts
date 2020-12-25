import { ActivePageService } from 'src/app/Services/active-page.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: []
})
export class AboutComponent implements OnInit {

  applicationVersion: string = environment.appVersion;

  constructor(activePageService: ActivePageService) {
    activePageService.activePage.next('About');
  }

  ngOnInit(): void {
  }
}
