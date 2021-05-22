import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SnackbarService } from 'src/app/Services/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classic-curriculum',
  templateUrl: './classic-curriculum.component.html',
  styleUrls: ['./classic-curriculum.component.scss'],
  animations: []
})
export class ClassicCurriculumComponent implements OnInit {
  @Output() isModern: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() data: any;

  emailString = 'mailto:skhalidqdev@outlook.es';
  xSmallScreen: boolean | any;
  smallScreen: boolean | any;
  hideButtons: string | any;

  constructor(private snackbar: SnackbarService, private router: Router, private breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe((x) => {
      this.smallScreen = x.breakpoints[Breakpoints.Small] && !x.breakpoints[Breakpoints.XSmall];
      this.xSmallScreen = x.breakpoints[Breakpoints.XSmall];
    });
  }

  Notify(): void {
    this.snackbar.OpenSnackbar('Copied to clipboard', 'Dismiss');
  }

  UnderLine(skill: string): string {
    let underline = 0;

    if (this.smallScreen || this.xSmallScreen) {
      for (let { } of skill) { underline += 8.5; }
    } else {
      for (let { } of skill) { underline += 10.5; }
    }

    return `width: ${underline}px;`;
  }

  ngOnInit(): void {
    this.hideButtons = this.router.url === '/home' ? 'display: none;' : '';
  }
}
