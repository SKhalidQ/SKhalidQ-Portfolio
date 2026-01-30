import { Component, inject, OnInit } from '@angular/core';
import { AboutCredits } from 'src/app/models/data/about-credits';
import { Page } from 'src/app/models/enums/page';
import { ThemeMode } from 'src/app/models/enums/theme-mode';
import { ActivePageService } from 'src/app/services/active-page/active-page.service';
import { SiteStatusService } from 'src/app/services/site-status/site-status.service';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  private readonly themeService = inject(ThemeService);
  private readonly activePageService = inject(ActivePageService);
  private readonly siteStatusService = inject(SiteStatusService);

  readonly logoPath = '../../../assets/images/logos/group_logo_transparent.png';
  readonly aboutCredits = AboutCredits;
  readonly changelogText = 'aboutPage.changelog';
  readonly checkUpdate = {
    text: 'aboutPage.checkUpdates',
    icon: 'system_update'
  };

  ngOnInit(): void {
    this.activePageService.activePage.next(`pages.${Page[Page.About]}`);
  }

  get changeColour(): string {
    switch (this.themeService.getEffectiveThemeMode()) {
      case ThemeMode.DarkMode:
        return 'dark-theme';
      case ThemeMode.LightMode:
        return 'light-theme';
      default:
        return 'light-theme';
    }
  }

  get currentYear(): number {
    return new Date().getFullYear();
  }

  get copyright(): string {
    // TODO: Get version number
    return `Copyright SKhalidQ ©${this.currentYear} v1.3.0`;
  }

  checkForUpdates(): void {
    this.siteStatusService.manualUpdateCheck();
  }
}
