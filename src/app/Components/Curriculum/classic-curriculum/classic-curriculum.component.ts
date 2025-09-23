import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SnackbarService } from 'src/app/Services/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classic-curriculum',
  templateUrl: './classic-curriculum.component.html',
  styleUrls: ['./classic-curriculum.component.scss'],
  animations: [],
  standalone: false
})
export class ClassicCurriculumComponent implements OnInit {
  @Output() isModern: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() data: any;

  emailString = 'mailto:skhalidqdev@outlook.es';
  xSmallScreen: boolean | any;
  smallScreen: boolean | any;
  hideButtons: string | any;

  constructor(private snackbar: SnackbarService, private router: Router, breakpointObserver: BreakpointObserver) {
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
      for (let { } of skill) {
        if (skill === "Teamwork")
          underline += 9;
        else if (skill === "Communication")
          underline += 8.5;
        else if (skill === "Organisation")
          underline += 7.5;
      }
    } else {
      for (let { } of skill) {
        if (skill === "Teamwork")
          underline += 11;
        else if (skill === "Communication")
          underline += 10.5;
        else if (skill === "Organisation")
          underline += 9.1;
      }
    }

    return `width: ${underline}px;`;
  }

  SwitchToModern(skillName: string): void {
    if (skillName === 'C#/.NET')
      this.isModern.emit(true);
  }

  ngOnInit(): void {
    this.hideButtons = this.router.url === '/home' ? 'display: none;' : '';
  }
}
