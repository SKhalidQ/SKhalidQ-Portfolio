import { inject, Injectable } from '@angular/core';
import { SnackbarService } from '../snackbar/snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class EvolutionService {
  private readonly snackbarService = inject(SnackbarService);

  private easterEggCounter = 1;

  public runEasterEgg(): void {
    if (this.easterEggCounter < 5) {
      this.easterEggCounter++;

      return;
    }

    const soundtrack = new Audio('../../../assets/easterEggs/Evolution.flac');

    soundtrack.volume = 1.0;
    soundtrack.play();
    this.easterEggCounter = 1;
    this.snackbarService.EVOLUTION();
  }
}
