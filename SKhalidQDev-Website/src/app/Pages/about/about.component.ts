import { ActivePageService } from 'src/app/Services/active-page.service';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  applicationVersion = environment.appVersion;

  constructor(activePageService: ActivePageService) {
    activePageService.activePage.next('About');
  }
}
