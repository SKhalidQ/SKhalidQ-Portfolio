import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject, Input } from '@angular/core';
import { Curriculum } from 'src/app/models/interfaces/Curriculum';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-classic-curriculum',
  templateUrl: './classic-curriculum.component.html',
  styleUrls: [
    './classic-curriculum.component.scss'
  ]
})
export class ClassicCurriculumComponent {
  @Input() curriculum!: Curriculum;

  private readonly snackbar = inject(SnackbarService);
  private readonly breakpointObserver = inject(BreakpointObserver);
  readonly clipboardMessage = 'curriculumPage.copyToClipboard';

  smallScreen = false;
  xSmallScreen = false;

  constructor() {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe((x) => {
      this.smallScreen = x.breakpoints[Breakpoints.Small] && !x.breakpoints[Breakpoints.XSmall];
      this.xSmallScreen = x.breakpoints[Breakpoints.XSmall];
    });
  }

  notify(): void {
    this.snackbar.openSnackbar('snackbar.copiedToClipboard', 'snackbar.dismiss');
  }
}
