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
/**
 * @description
 * Page component for the About section.
 * Displays app credits, a changelog link, a manual update check button,
 * and a copyright notice that reflects the current year.
 */
export class AboutPageComponent implements OnInit {
  private readonly themeService = inject(ThemeService);
  private readonly activePageService = inject(ActivePageService);
  private readonly siteStatusService = inject(SiteStatusService);

  /** Path to the group logo asset displayed on the about page. */
  readonly logoPath = '../../../assets/images/logos/group_logo_transparent.png';
  /** Credits data array sourced from static model data. */
  readonly aboutCredits = AboutCredits;
  /** Translation key for the changelog link text. */
  readonly changelogText = 'aboutPage.changelog';
  /** Configuration for the check-for-updates action button. */
  readonly checkUpdate = {
    text: 'aboutPage.checkUpdates',
    icon: 'system_update'
  };

  /**
   * @description Sets the active page key so the header bottom bar reflects the About page.
   * @returns {void}
   */
  ngOnInit(): void {
    this.activePageService.activePage.next(`pages.${Page[Page.About]}`);
  }

  /**
   * @description
   * Returns a CSS class name corresponding to the current effective theme,
   * used to apply theme-specific styles to page elements.
   * @returns {string} `'dark-theme'` or `'light-theme'`.
   */
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

  /**
   * @description Returns the current calendar year for use in the copyright notice.
   * @returns {number} The current four-digit year.
   */
  get currentYear(): number {
    return new Date().getFullYear();
  }

  /**
   * @description Builds the copyright string displayed in the page footer.
   * @returns {string} A formatted copyright string including the current year and app version.
   */
  get copyright(): string {
    // TODO: Get version number
    return `Copyright SKhalidQ ©${this.currentYear} v1.3.0`;
  }

  /**
   * @description
   * Delegates to {@link SiteStatusService.manualUpdateCheck} to trigger a
   * user-initiated service worker update check.
   * @returns {void}
   */
  checkForUpdates(): void {
    this.siteStatusService.manualUpdateCheck();
  }
}
