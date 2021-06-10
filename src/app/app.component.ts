import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DialogComponent } from './Components/dialog/dialog.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { environment } from 'src/environments/environment.prod';
import { ThemeService } from 'src/app/Services/theme.service';
import { ConnectionService } from 'ng-connection-service';
import { MatDialog } from '@angular/material/dialog';
import { SwUpdate } from '@angular/service-worker';
import { ThemeMode, Themes } from './Models/theme';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Platform } from '@angular/cdk/platform';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: []
})
export class AppComponent implements OnInit {

  title = 'SKhalidQ Portfolio';
  versionNumber = environment.appVersion;
  showFiller = false;
  smallScreen: boolean | any;
  xSmallScreen: boolean | any;
  currentTheme: ThemeMode | any;
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
    private update: SwUpdate,
    private connectionService: ConnectionService) {

    breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe((x) => {
      this.smallScreen = x.breakpoints[Breakpoints.Small] && !x.breakpoints[Breakpoints.XSmall];
      this.xSmallScreen = x.breakpoints[Breakpoints.XSmall];
    });

    this.CheckConnection();

    this.CheckUpdates();
  }

  ngOnInit(): void {
    this.SetTabTitle();
  }

  SetTabTitle(): any {
    const appTitle = this.titleService.getTitle();
    const title = 'title';

    this.router.events.pipe(filter(event => event instanceof NavigationEnd),
      map(() => {
        const child: any = this.activatedRoute.firstChild;
        if (child.snapshot.data[title]) {
          return child.snapshot.data[title];
        }

        return appTitle;
      })).subscribe((ttl: string) => {
        this.titleService.setTitle(ttl);
      }
    );
  }

  CheckUpdates(): void {
    this.update.available.subscribe(() => {
      this.dialog.open(DialogComponent, {
        data: {
          Title: `New update!`,
          Message: 'There is new content available on this page. Would you like to update?',
          Action: 'Refresh'
        },
        panelClass: [this.themeService.themeMode.value],
      }).afterClosed().subscribe(() => {
        document.location.reload();
      });
    });
  }

  CheckConnection(): void {
    this.connectionService.monitor().subscribe(isConnected => {
      if (!isConnected) {
        this.dialog.open(DialogComponent, {
          data: {
            Title: `Lost connection`,
            Message: 'It seems like you have lost connection. Some features might not be accessible.',
            Action: 'Close'
          },
          panelClass: [this.themeService.themeMode.value],
        })
      } else {
        this.dialog.closeAll();
      }
    });
  }
}
