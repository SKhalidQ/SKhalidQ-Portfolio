import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ThemeMode, Themes } from './Models/theme';
import { ThemeService } from 'src/app/Services/Theme/theme.service';
import { getSupportedInputTypes, Platform, supportsPassiveEventListeners, supportsScrollBehavior, } from '@angular/cdk/platform';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'SKhalidQDev-Website';
  showFiller = false;
  smallScreen: boolean;
  xSmallScreen: boolean;
  currentTheme: ThemeMode;
  themeData = Themes;

  supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
  supportsPassiveEventListeners = supportsPassiveEventListeners();
  supportsScrollBehavior = supportsScrollBehavior();

  constructor(
    public breakpointObserver: BreakpointObserver, 
    public themeService: ThemeService, 
    public platform: Platform) { 
    
      console.log(this.supportedInputTypes);
      console.log(this.supportsPassiveEventListeners);
      console.log(this.supportsScrollBehavior);

    breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe((x) => {
      this.smallScreen = x.breakpoints[Breakpoints.Small] && !x.breakpoints[Breakpoints.XSmall];
      this.xSmallScreen = x.breakpoints[Breakpoints.XSmall];
    });
    
  }

}
