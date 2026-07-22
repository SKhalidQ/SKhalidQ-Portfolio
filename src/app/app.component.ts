import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { ActivePageService } from './services/active-page/active-page.service';
import { MetaThemeService } from './services/meta-theme/meta-theme.service';
import { SiteStatusService } from './services/site-status/site-status.service';
import { ThemeService } from './services/theme/theme.service';
import { TranslationService } from './services/translation/translation.service';
import { LanguageService } from './services/language/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
/**
 * @description
 * Root application component.
 * Bootstraps global services (theme, meta-theme, site-status) and manages
 * the browser tab title by subscribing to router navigation events.
 */
export class AppComponent implements OnInit {
  readonly themeService = inject(ThemeService);
  private readonly metaThemeService = inject(MetaThemeService);
  private readonly router = inject(Router);
  private readonly titleService = inject(Title);
  private readonly siteStatusService = inject(SiteStatusService);
  private readonly activePageService = inject(ActivePageService);
  private readonly translationService = inject(TranslationService);
  private readonly languageService = inject(LanguageService);

  /**
   * @description Initialises the dynamic page title subscription.
   */
  ngOnInit(): void {
    this.setTabTitle();
  }

  /**
   * @description
   * Subscribes to ActivePageService and TranslationService changes and updates the browser tab title
   * based on the current active page and language. Ensures the title updates when either changes.
   * @returns {void}
   */
  setTabTitle(): void {
    combineLatest([
      this.activePageService.activePage$,
      this.languageService.currentLanguage$
    ]).subscribe(([pageKey]) => {
      const translatedPageName = this.translationService.getTextPath(pageKey);
      const translatedPortfolio = this.translationService.getTextPath('portfolio');

      this.titleService.setTitle(`${translatedPageName} | ${translatedPortfolio} | SKhalidQ`);
    });
  }
}
