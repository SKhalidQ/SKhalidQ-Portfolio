import { SnackbarService } from 'src/app/Services/snackbar.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-classic-curriculum',
  templateUrl: './classic-curriculum.component.html',
  styleUrls: ['./classic-curriculum.component.scss']
})
export class ClassicCurriculumComponent implements OnInit {
  @Output() isModern: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() data: any;

  hideButtons: string | any;
  emailstring = 'mailto:skhalidqdev@outlook.es';
  smallScreen: boolean | any;
  xSmallScreen: boolean | any;

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
