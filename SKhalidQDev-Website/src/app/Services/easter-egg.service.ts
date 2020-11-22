import { SnackbarService } from './snackbar.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EasterEggService {

  constructor(private snackbarService: SnackbarService) { }

  easterEggCount = 1;
  audioPlaying = false;
  soundtrack = new Audio('../../assets/Easter Eggs/Evolution.flac');

  Evolution(btn: string): void {
    if (btn === 'About') {
      if (this.easterEggCount < 5) {
        this.easterEggCount++;
      } else if (this.easterEggCount === 5) {
        this.snackbarService.EVOLUTION();
        this.soundtrack.volume = 1.0;
        this.soundtrack.play();
        this.easterEggCount = 1;
        this.audioPlaying = true;
      }
    }
  }

}
