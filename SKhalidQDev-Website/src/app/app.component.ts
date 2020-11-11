import { getSupportedInputTypes, Platform, supportsPassiveEventListeners, supportsScrollBehavior, } from '@angular/cdk/platform';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ThemeService } from 'src/app/Services/Theme/theme.service';
import { ThemeMode, Themes } from './Models/theme';
import { SwUpdate } from '@angular/service-worker';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';

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

  updateContent: boolean = false;

  supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
  supportsPassiveEventListeners = supportsPassiveEventListeners();
  supportsScrollBehavior = supportsScrollBehavior();

  constructor(
    public breakpointObserver: BreakpointObserver,
    public themeService: ThemeService,
    public platform: Platform,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    update: SwUpdate) {
    update.available.subscribe(() => {
      // this.updateContent = true;
      update.activateUpdate().then(() => document.location.reload());
    })

    breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe((x) => {
      this.smallScreen = x.breakpoints[Breakpoints.Small] && !x.breakpoints[Breakpoints.XSmall];
      this.xSmallScreen = x.breakpoints[Breakpoints.XSmall];
    });

  }

  ngOnInit(): void {
    const appTitle = this.titleService.getTitle();
    this.router.events.pipe(filter(event => event instanceof NavigationEnd),
      map(() => {
        const child = this.activatedRoute.firstChild;
        if (child.snapshot.data['title']) return child.snapshot.data['title'];

        return appTitle;
      })).subscribe((ttl: string) => {
        this.titleService.setTitle(ttl);
    });
  }

}
