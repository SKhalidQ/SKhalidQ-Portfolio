import { Component, OnInit } from '@angular/core';
import { ActivePageService } from 'src/app/Services/active-page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private activePageService: ActivePageService) {
    activePageService.activePage.next('Home');
  }

}
