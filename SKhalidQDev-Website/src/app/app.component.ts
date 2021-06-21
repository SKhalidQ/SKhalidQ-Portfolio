import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ThemeMode, Themes } from './Models/theme-Models';
import { ThemeService } from 'src/app/Services/Theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'SKhalidQDev-Website';
  showFiller = false;
  smallScreen: boolean;
  xSmallScreen: boolean;
  currentTheme: ThemeMode;
  themeData = Themes;

  constructor(public breakpointObserver: BreakpointObserver, public themeService: ThemeService) { 

    breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe((x) => {
      this.smallScreen = x.breakpoints[Breakpoints.Small] && !x.breakpoints[Breakpoints.XSmall];
      this.xSmallScreen = x.breakpoints[Breakpoints.XSmall];
    });
  }

  ngOnInit(): void { }

}
