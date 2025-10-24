import { Component, inject, OnInit } from '@angular/core';
import { HomeContentData } from 'src/app/models/data/home-content';
import { Page } from 'src/app/models/enums/page';
import { ThemeMode } from 'src/app/models/enums/theme-mode';
import { ActivePageService } from 'src/app/services/active-page/active-page.service';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  private readonly themeService = inject(ThemeService);
  private readonly activePageService = inject(ActivePageService);

  private readonly baseImagePath = './assets/images/previews';
  readonly homeData = HomeContentData;

  ngOnInit(): void {
    this.activePageService.setActivePage({ page: `pages.${Page[Page.Home]}` });
  }

  get projectImagePath(): string {
    switch (this.themeService.themeMode.getValue()) {
      case ThemeMode.DarkMode:
        return `${this.baseImagePath}/ProjectPreviewDark.png`;
      case ThemeMode.LightMode:
        return `${this.baseImagePath}/ProjectPreviewLight.png`;
      case ThemeMode.SystemDefault:
        {
          const systemTheme = this.themeService.getSystemPreferredTheme();
          return systemTheme === ThemeMode.DarkMode
            ? `${this.baseImagePath}/ProjectPreviewDark.png`
            : `${this.baseImagePath}/ProjectPreviewLight.png`;
        }
    }
  }

  get cvImagePath(): string {
    switch (this.themeService.themeMode.getValue()) {
      case ThemeMode.DarkMode:
        return `${this.baseImagePath}/CVPreviewDark.png`;
      case ThemeMode.LightMode:
        return `${this.baseImagePath}/CVPreviewLight.png`;
      case ThemeMode.SystemDefault:
        {
          const systemTheme = this.themeService.getSystemPreferredTheme();
          return systemTheme === ThemeMode.DarkMode
            ? `${this.baseImagePath}/CVPreviewDark.png`
            : `${this.baseImagePath}/CVPreviewLight.png`;
        }
    }
  }
}
