import { Component, inject, OnInit } from '@angular/core';
import { ThemeService } from './services/theme/theme.service';
import { MetaThemeService } from './services/meta-theme/meta-theme.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { Page } from './models/enums/Page';
import { SiteStatusService } from './services/siteStatus/site-status.service';

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
    this.siteStatusService.checkUpdates();
  }

  setTabTitle(): void {
    const appTitle = this.titleService.getTitle();
    const title = 'pageTitle';

    this.router.events.pipe(filter(event => event instanceof NavigationEnd),
      map(() => {
        const child: ActivatedRoute | null = this.activatedRoute.firstChild;
        if (child && child.snapshot.data[title]) {
          return Page[child.snapshot.data[title]] + ' | SKhalidQ';
        }

        return appTitle;
      })).subscribe((ttl: string) => {
        this.titleService.setTitle(ttl);
      }
    );
  }
}
