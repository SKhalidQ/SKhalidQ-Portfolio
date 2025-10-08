import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject, Input } from '@angular/core';
import { BulletPoints } from 'src/app/models/interfaces/Curriculum';

@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.html',
  styleUrls: ['./bullet.component.scss']
})
export class BulletComponent {
  @Input() points: BulletPoints[] = [];
  @Input() title = '';

  private readonly breakpointObserver = inject(BreakpointObserver);

  smallScreen = false;
  xSmallScreen = false;

  constructor() {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe((x) => {
      this.smallScreen = x.breakpoints[Breakpoints.Small] && !x.breakpoints[Breakpoints.XSmall];
      this.xSmallScreen = x.breakpoints[Breakpoints.XSmall];
    });
  }

  underLine(text: string): string {
    if (!text){
      return 'width: 0px;';
    }

    const underlineCharWidth: Record<string, { small: number; large: number }> = {
      teamwork: { small: 9, large: 11 },
      communication: { small: 8.5, large: 10.4 },
      organisation: { small: 7.5, large: 9.1 }
    };
    const defaultCharWidth = { small: 7.08, large: 8.7 };

    const isSmall = this.smallScreen || this.xSmallScreen;
    const cfg = underlineCharWidth[text.toLocaleLowerCase()] || defaultCharWidth;
    const perChar = isSmall ? cfg.small : cfg.large;
    const width = perChar * text.length;

    return `width: ${width}px;`;
  }
}
