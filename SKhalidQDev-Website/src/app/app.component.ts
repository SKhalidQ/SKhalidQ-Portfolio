import { DialogComponent } from './Components/dialog/dialog.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ThemeService } from 'src/app/Services/Theme/theme.service';
import { environment } from 'src/environments/environment';
import { ThemeMode, Themes } from './Models/theme';
import { MatDialog } from '@angular/material/dialog';
import { SwUpdate } from '@angular/service-worker';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Platform } from '@angular/cdk/platform';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: []
})
export class AppComponent implements OnInit {

  title = 'SKhalidQDev';
  // versionNumber = environment.appVersion;
  showFiller = false;
  smallScreen: boolean;
  xSmallScreen: boolean;
  currentTheme: ThemeMode;
  themeData = Themes;

  updateContent = false;

  constructor(
    public breakpointObserver: BreakpointObserver,
    public themeService: ThemeService,
    public platform: Platform,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private dialog: MatDialog,
    private update: SwUpdate) {

    breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe((x) => {
      this.smallScreen = x.breakpoints[Breakpoints.Small] && !x.breakpoints[Breakpoints.XSmall];
      this.xSmallScreen = x.breakpoints[Breakpoints.XSmall];
    });

  }

  ngOnInit(): void {
    this.SetTabTitle();

    this.CheckUpdates();
  }

  CheckUpdates(): void {
    this.update.available.subscribe(() => {
      this.dialog.open(DialogComponent, {
        data: {
          Title: `New update!`,
          Message: 'There is new content available on this page. Would you like to update?',
          Action: 'Refresh'
        }
      }).afterClosed().subscribe(() => {
        document.location.reload();
      });
    });
  }

  SetTabTitle(): any {
    const appTitle = this.titleService.getTitle();
    let beta = environment.betaVersion;
    const title = 'title';

    this.router.events.pipe(filter(event => event instanceof NavigationEnd),
      map(() => {
        const child = this.activatedRoute.firstChild;
        if (child.snapshot.data[title]) {
          if (beta == null) {
            beta = '';
          }
          return child.snapshot.data[title] + beta;
        }

        return appTitle;
      })).subscribe((ttl: string) => {
        this.titleService.setTitle(ttl);
      }
    );
  }
}
