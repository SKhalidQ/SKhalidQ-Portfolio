import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, inject, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { LanguageMenuButton } from 'src/app/models/data/LanguageMenuButtons';
import { NavigationButtons } from 'src/app/models/data/NavigationButtons';
import { SocialMediaButtons } from 'src/app/models/data/SocialMediaButtons';
import { ThemeMenuButton } from 'src/app/models/data/ThemeMenuButtons';
import { Language } from 'src/app/models/enums/Language';
import { ThemeMode } from 'src/app/models/enums/ThemeMode';
import { MenuButton, MenuOption } from 'src/app/models/interfaces/Menu';
import { NavigationButton } from 'src/app/models/interfaces/NavigationButton';
import { ActivePageService } from 'src/app/services/activePage/active-page.service';
import { EvolutionService } from 'src/app/services/easterEgg/evolution.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { TranslationService } from 'src/app/services/translation/translation.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() toggleSidenav = new EventEmitter<void>();
  @Input() isSideNav = false;

  private readonly breakpointObserver = inject(BreakpointObserver);
  public readonly themeService = inject(ThemeService);
  public readonly languageService = inject(LanguageService);
  private readonly translationService = inject(TranslationService);
  public readonly activePageService = inject(ActivePageService);
  public readonly snackbarService = inject(SnackbarService);
  private readonly easterEggService = inject(EvolutionService);

  logo: { text: string, icon: string } = { text: 'My Portfolio', icon: './assets/images/logos/logo_transparent.svg' };
  navigationButtons: NavigationButton[] = NavigationButtons;
  themeMenu: MenuButton = ThemeMenuButton;
  languageMenu: MenuButton = LanguageMenuButton;
  socialMediaButtons: NavigationButton[] = SocialMediaButtons;

  smallScreen = false;
  xSmallScreen = false;

  /** Latest resolved (effective) theme (DarkMode / LightMode). Useful when SystemDefault is selected. */
  private lastEffectiveTheme: ThemeMode = this.themeService.getSystemPreferredTheme();
  private readonly destroy$ = new Subject<void>(); // still used for breakpoint observer cleanup if desired later

  constructor() {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe((x) => {
      this.smallScreen = x.breakpoints[Breakpoints.Small] && !x.breakpoints[Breakpoints.XSmall];
      this.xSmallScreen = x.breakpoints[Breakpoints.XSmall];
    });

  // Track effective theme for menu icon only
  this.themeService.effectiveThemeMode$.subscribe(eff => this.lastEffectiveTheme = eff);
  }

  ngOnInit(): void {
    this.themeMenu = {
      ...ThemeMenuButton,
      icon: this.themeMenuIcon,
      options: ThemeMenuButton.options?.map(opt => ({
        ...opt,
        isActive: opt.key === this.themeService.themeMode.getValue(),
        method: () => this.updateTheme(opt.key)
      }))
    };

    this.languageMenu = {
      ...LanguageMenuButton,
      options: LanguageMenuButton.options?.map(opt => ({
        ...opt,
        isActive: opt.key === this.languageService.currentLanguage.getValue(),
        method: () => this.updateLanguage(opt.key)
      }))
    };

    this.navigationButtons = NavigationButtons.map(button => ({
      ...button,
      method: () => button.text.includes('about') ? this.easterEggService.runEasterEgg() : undefined
    }));
  }

  get getSideNavToggleIcon(): string {
    return this.isSideNav ? 'clear' : 'menu';
  }

  get themeMenuIcon(): string {
    const currentTheme = this.themeService.themeMode.value;
    if (currentTheme === ThemeMode.SystemDefault) {
      return this.lastEffectiveTheme === ThemeMode.DarkMode ? 'dark_mode' : 'light_mode';
    }

    return currentTheme === ThemeMode.DarkMode ? 'dark_mode' : 'light_mode';
  }

  get hideMenuButtons(): boolean {
    return !this.isSideNav && !(this.smallScreen || this.xSmallScreen);
  }

  updateTheme(theme: string) {
    const newTheme: ThemeMode = ThemeMode[theme as keyof typeof ThemeMode] || ThemeMode.LightMode;

    this.themeMenu.options?.map((option: MenuOption) => {
      option.isActive = option.key === theme;
    });

    this.themeService.setTheme(newTheme);

    const themeName = this.translationService.getTextPath(`themeMenu.options.${theme}`);
    const dismissText = this.translationService.getTextPath(`snackbar.dismiss`);
    const themeChangeMessage = this.translationService.getTextPath(`snackbar.themeChanged`, [themeName.toLowerCase()]);
    this.snackbarService.openSnackbar(themeChangeMessage, dismissText);
  }

  updateLanguage(language: string) {
    const newLanguage: Language = Language[language as keyof typeof Language] || Language.enGB;

    this.languageMenu.options?.map((option: MenuOption) => {
      option.isActive = option.key === language;
    });

    this.languageService.setLanguage(newLanguage);

    const languageName = this.translationService.getTextPath(`languageMenu.options.${language}`);
    const dismissText = this.translationService.getTextPath(`snackbar.dismiss`);
    const languageChangeMessage = this.translationService.getTextPath(`snackbar.languageChanged`, [languageName.toLowerCase()]);
    this.snackbarService.openSnackbar(languageChangeMessage, dismissText);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
