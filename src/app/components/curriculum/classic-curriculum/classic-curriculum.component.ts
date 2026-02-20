import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject, Input } from '@angular/core';
import { Curriculum } from 'src/app/models/interfaces/curriculum';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

/**
 * @description
 * The `ClassicCurriculumComponent` is an Angular component responsible for displaying a classic curriculum vitae (CV) layout.
 * It takes a `Curriculum` object as input and renders the relevant information in a structured format.
 * The component also handles responsive design by observing screen size changes and provides a method to notify users when content is copied to the clipboard.
 */
@Component({
  selector: 'app-classic-curriculum',
  templateUrl: './classic-curriculum.component.html',
  styleUrls: ['./classic-curriculum.component.scss']
})
export class ClassicCurriculumComponent {
  /**
   * @description
   * The curriculum data to be displayed in the component, which is passed as an input property.
   * @type {Curriculum}
   * @memberof ClassicCurriculumComponent
   */
  @Input() curriculum!: Curriculum;

  private readonly snackbar = inject(SnackbarService);
  private readonly breakpointObserver = inject(BreakpointObserver);
  readonly clipboardMessage = 'curriculumPage.copyToClipboard';

  smallScreen = false;
  xSmallScreen = false;

  /**
   * @description
   * Subscribes to breakpoint changes to determine if the screen size is small or extra small, and updates the corresponding flags accordingly.
   * @returns void
   */
  constructor() {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe((x) => {
      this.smallScreen = x.breakpoints[Breakpoints.Small] && !x.breakpoints[Breakpoints.XSmall];
      this.xSmallScreen = x.breakpoints[Breakpoints.XSmall];
    });
  }

  /**
   * @description
   * Displays a snackbar notification indicating that the content has been copied to the clipboard.
   * @returns void
   */
  notify(): void {
    this.snackbar.openSnackbar('snackbar.copiedToClipboard', 'snackbar.dismiss');
  }

    /**
   * @description
   * Handles image load errors by applying a fallback image and styling.
   * @param imageElement The image element that encountered an error.
   * @returns void
   */
  public onImageError(imageElement: HTMLImageElement): void {
    if ((imageElement.dataset)['fallbackApplication']) {
      return;
    }

    (imageElement.dataset)['fallbackApplied'] = '1';
    imageElement.src = 'assets/images/icons/error_outline-14px.svg';
    imageElement.classList.add('img--fallback');
  }
}
