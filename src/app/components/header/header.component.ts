import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { LanguageMenuButton } from 'src/app/models/data/language-menu-buttons';
import { NavigationButtons } from 'src/app/models/data/navigation-buttons';
import { SocialMediaButtons } from 'src/app/models/data/social-media-buttons';
import { ThemeMenuButton } from 'src/app/models/data/theme-menu-buttons';
import { Language } from 'src/app/models/enums/language';
import { ThemeMode } from 'src/app/models/enums/theme-mode';
import { MenuButton, MenuOption } from 'src/app/models/interfaces/menu';
import { NavigationButton } from 'src/app/models/interfaces/navigation-button';
import { ActivePageService } from 'src/app/services/active-page/active-page.service';
import { EvolutionService } from 'src/app/services/easter-egg/evolution.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { TranslationService } from 'src/app/services/translation/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
/**
 * @description
 * Smart component that renders the application top bar.
 * Handles theme selection, language selection, navigation, and responsive
 * breakpoint switching between full header and sidenav-toggle mode.
 * When used inside the sidenav (`isSideNav = true`), menu buttons are hidden
 * and a close icon is shown instead of the hamburger.
 */
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() toggleSidenav = new EventEmitter<void>();
  @Input() isSideNav = false;

  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly translationService = inject(TranslationService);
  private readonly easterEggService = inject(EvolutionService);
  public readonly themeService = inject(ThemeService);
  public readonly languageService = inject(LanguageService);
  public readonly activePageService = inject(ActivePageService);
  public readonly snackbarService = inject(SnackbarService);

  readonly logo: { text: string, icon: string } = { text: 'My Portfolio', icon: './assets/images/logos/logo_transparent.svg' };
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

  /**
   * @description
   * Initialises theme menu, language menu, and navigation button options with
   * their active states and bound action callbacks.
   * @returns {void}
   */
  ngOnInit(): void {
    this.themeMenu = {
      ...ThemeMenuButton,
      icon: this.themeMenuIcon,
      options: ThemeMenuButton.options?.map(opt => ({
        ...opt,
        isActive: opt.key === this.themeService.themeMode.getValue(),
        method: (): void => this.updateTheme(opt.key)
      }))
    };

    this.languageMenu = {
      ...LanguageMenuButton,
      options: LanguageMenuButton.options?.map(opt => ({
        ...opt,
        isActive: opt.key === this.languageService.currentLanguage.getValue(),
        method: (): void => this.updateLanguage(opt.key)
      }))
    };

    this.navigationButtons = NavigationButtons.map(button => ({
      ...button,
      method: (): void => button.text.includes('about') ? this.easterEggService.runEasterEgg() : undefined
    }));
  }

  /**
   * @description Returns the appropriate Material icon name for the sidenav toggle button.
   * @returns {string} `'clear'` when the sidenav is open, `'menu'` when closed.
   */
  get getSideNavToggleIcon(): string {
    return this.isSideNav ? 'clear' : 'menu';
  }

  /**
   * @description
   * Computes the Material icon name for the theme menu trigger button.
   * Resolves `SystemDefault` using the last known effective theme so the icon
   * always reflects the actual rendered appearance.
   * @returns {string} `'dark_mode'` or `'light_mode'`.
   */
  get themeMenuIcon(): string {
    const currentTheme = this.themeService.themeMode.value;
    if (currentTheme === ThemeMode.SystemDefault) {
      return this.lastEffectiveTheme === ThemeMode.DarkMode ? 'dark_mode' : 'light_mode';
    }

    return currentTheme === ThemeMode.DarkMode ? 'dark_mode' : 'light_mode';
  }

  /**
   * @description
   * Returns `true` when the icon-only menu buttons should be hidden.
   * Menu buttons are hidden when rendered inside the sidenav, or on small/extra-small screens
   * (where the full sidenav is used instead).
   * @returns {boolean} `true` if menu buttons should not be rendered.
   */
  get hideMenuButtons(): boolean {
    return !this.isSideNav && !(this.smallScreen || this.xSmallScreen);
  }

  /**
   * @description
   * Applies a new theme selection, updates the active state on the options,
   * refreshes the menu trigger icon, and shows a confirmation snackbar.
   * @param {string} theme - The string key of the {@link ThemeMode} enum value to apply.
   * @returns {void}
   */
  updateTheme(theme: string): void {
    const newTheme: ThemeMode = ThemeMode[theme as keyof typeof ThemeMode] || ThemeMode.LightMode;

    this.themeMenu.options?.map((option: MenuOption) => {
      option.isActive = option.key === theme;
    });

    this.themeService.setTheme(newTheme);
    this.themeMenu = { ...this.themeMenu, icon: this.themeMenuIcon };

    const themeName = this.translationService.getTextPath(`themeMenu.options.${theme}`);
    const dismissText = this.translationService.getTextPath('snackbar.dismiss');
    const themeChangeMessage = this.translationService.getTextPath('snackbar.themeChanged', [themeName.toLowerCase()]);
    this.snackbarService.openSnackbar(themeChangeMessage, dismissText);
  }

  /**
   * @description
   * Applies a new language selection, updates the active state on the options,
   * and shows a confirmation snackbar.
   * @param {string} language - The string key of the {@link Language} enum value to apply.
   * @returns {void}
   */
  updateLanguage(language: string): void {
    const newLanguage: Language = Language[language as keyof typeof Language] || Language.enGB;

    this.languageMenu.options?.map((option: MenuOption) => {
      option.isActive = option.key === language;
    });

    this.languageService.setLanguage(newLanguage);

    const languageName = this.translationService.getTextPath(`languageMenu.options.${language}`);
    const dismissText = this.translationService.getTextPath('snackbar.dismiss');
    const languageChangeMessage = this.translationService.getTextPath('snackbar.languageChanged', [languageName.toLowerCase()]);
    this.snackbarService.openSnackbar(languageChangeMessage, dismissText);
  }

    /**
   * @description
   * Handles image load errors by applying a fallback image and styling.
   * @param imageElement The image element that encountered an error.
   * @returns void
   */
  onImageError(imageElement: HTMLImageElement): void {
    if ((imageElement.dataset)['fallbackApplication']) {
      return;
    }

    (imageElement.dataset)['fallbackApplied'] = '1';
    imageElement.src = 'assets/images/icons/error_outline-14px.svg';
    imageElement.classList.add('img--fallback');
  }

  /**
   * @description
   * Completes the `destroy$` subject to clean up any subscriptions
   * using `takeUntil(this.destroy$)`.
   * @returns {void}
   */
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
