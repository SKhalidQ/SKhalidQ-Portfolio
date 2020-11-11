import { ActivePageService } from 'src/app/Services/active-page.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(activePageService: ActivePageService) {
    activePageService.activePage.next('Home');
  }

}
