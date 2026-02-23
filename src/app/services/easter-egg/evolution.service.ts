import { inject, Injectable } from '@angular/core';
import { SnackbarService } from '../snackbar/snackbar.service';

@Injectable({
  providedIn: 'root'
})
/**
 * @description
 * Service that manages the hidden easter egg feature.
 * Requires the trigger action (clicking the About nav button) to be performed
 * a specific number of consecutive times before the easter egg activates.
 */
export class EvolutionService {
  private readonly snackbarService = inject(SnackbarService);

  /** Tracks how many consecutive trigger actions have been performed. */
  private easterEggCounter = 1;

  /**
   * @description
   * Increments the easter egg counter on each call.
   * Once the threshold is reached, plays the Evolution audio clip,
   * triggers the EVOLUTION snackbar, and resets the counter.
   * @returns {void}
   */
  public runEasterEgg(): void {
    if (this.easterEggCounter < 5) {
      this.easterEggCounter++;

      return;
    }

    const soundtrack = new Audio('../../../assets/easter-eggs/Evolution.flac');

    soundtrack.volume = 1.0;
    soundtrack.play();
    this.easterEggCounter = 1;
    this.snackbarService.EVOLUTION();
  }
}
