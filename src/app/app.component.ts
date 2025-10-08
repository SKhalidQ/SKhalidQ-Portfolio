import { Component, inject, OnInit } from '@angular/core';
import { ThemeService } from './services/theme/theme.service';
import { MetaThemeService } from './services/meta-theme/meta-theme.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { Page } from './models/enums/Page';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  themeService = inject(ThemeService);
  metaThemeService = inject(MetaThemeService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  titleService = inject(Title);

  ngOnInit(): void {
    this.setTabTitle();
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
