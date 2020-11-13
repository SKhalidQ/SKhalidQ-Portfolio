import { ActivePageService } from 'src/app/Services/active-page.service';
import { environment } from 'src/environments/environment';
import { Component } from '@angular/core';

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
