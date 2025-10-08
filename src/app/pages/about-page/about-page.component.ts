import { Component, inject, OnInit } from '@angular/core';
import { AboutCredits } from 'src/app/models/data/AboutCredits';
import { Page } from 'src/app/models/enums/Page';
import { ThemeMode } from 'src/app/models/enums/ThemeMode';
import { ActivePageService } from 'src/app/services/activePage/active-page.service';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  readonly themeService = inject(ThemeService);
  readonly activePageService = inject(ActivePageService);

  readonly logoPath = '../../../assets/images/logos/group_logo_transparent.png';
  readonly aboutCredits = AboutCredits;
  readonly changelogText = 'Changelog';

  ngOnInit(): void {
    this.activePageService.activePage.next(`pages.${Page[Page.About]}`);
  }

  get changeColour(): string {
    switch (this.themeService.themeMode.value) {
      case ThemeMode.DarkMode:
        return 'dark-theme';
      case ThemeMode.LightMode:
        return 'light-theme';
      default:
        return this.themeService.getSystemPreferredTheme() === ThemeMode.DarkMode ? 'dark-theme' : 'light-theme';
    }
  }

  get currentYear(): number {
    return new Date().getFullYear();
  }

  get copyright(): string {
    // TODO: Get version number
    return `Copyright SKhalidQ ©${this.currentYear} v1.3.0`;
  }
}
