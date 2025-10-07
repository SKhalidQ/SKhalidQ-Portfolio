import { Component, inject } from '@angular/core';
import { ThemeService } from './services/theme/theme.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { Page } from './models/enums/Page';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SKhalidQ-Portfolio';

  themeService = inject(ThemeService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  titleService = inject(Title);

  ngOnInit(): void {
    this.setTabTitle();
  }

  setTabTitle(): any {
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
