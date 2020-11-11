import { ActivePageService } from 'src/app/Services/active-page.service';
import { SnackbarService } from 'src/app/Services/snackbar.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  easterEggCount: number = 1;
  audioPlaying: boolean = false;
  soundtrack = new Audio('../../assets/Easter Eggs/Evolution.flac');

  constructor(activePageService: ActivePageService, private snackbar: SnackbarService) {
    activePageService.activePage.next('About');
  }

  Evolution() {
    if (this.easterEggCount < 10) {
      this.easterEggCount++;
    } else if (this.easterEggCount == 10) {
      this.snackbar.EVOLUTION();
      this.soundtrack.volume = 1.0;
      this.soundtrack.play();
      this.easterEggCount = 1;
      this.audioPlaying = true;
    }
  }
}
