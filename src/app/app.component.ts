import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { Page } from './models/enums/page';
import { MetaThemeService } from './services/meta-theme/meta-theme.service';
import { SiteStatusService } from './services/site-status/site-status.service';
import { ThemeService } from './services/theme/theme.service';
import { Environment } from './models/enums/environment';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  readonly themeService = inject(ThemeService);
  private readonly metaThemeService = inject(MetaThemeService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly titleService = inject(Title);
  private readonly siteStatusService = inject(SiteStatusService);

  ngOnInit(): void {
    this.setTabTitle();
  }

  setTabTitle(): void {
    const appTitle = this.titleService.getTitle();
    const title = 'pageTitle';

    this.router.events.pipe(filter(event => event instanceof NavigationEnd),
      map(() => {
        let route: ActivatedRoute | null = this.activatedRoute.firstChild;
        while (route?.firstChild) {
          route = route.firstChild;
        }

        if (route?.snapshot.data[title]) {
          return `${Page[route.snapshot.data[title]]} | Porfolio - ${Environment[environment.environment]} | SKhalidQ`;
        }

        return appTitle;
      })).subscribe((ttl: string) => {
        this.titleService.setTitle(ttl);
      }
    );
  }
}
