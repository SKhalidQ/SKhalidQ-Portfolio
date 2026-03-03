import { Directive, inject, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
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

/**
 * @directive MenuBaseComponentDirective
 * @description
 * Abstract base directive that centralises all shared menu logic consumed by both
 * {@link HeaderComponent} and {@link SidenavComponent}.
 *
 * Responsibilities:
 * - Initialises and keeps in sync the {@link themeMenu}, {@link languageMenu}, and
 *   {@link navigationButtons} state, including each option's `isActive` flag.
 * - Reacts to theme and language changes emitted by {@link ThemeService} and
 *   {@link LanguageService} so every extending component reflects the latest selection
 *   regardless of which component triggered the change.
 * - Exposes {@link updateTheme} and {@link updateLanguage} as the single source of truth
 *   for applying user selections, firing the corresponding snackbar confirmation.
 * - Provides {@link onImageError} for consistent broken-image fallback handling.
 * - Manages subscription cleanup via {@link destroy$} and {@link ngOnDestroy}.
 *
 * @implements {OnInit}
 * @implements {OnDestroy}
 */
@Directive({
  selector: '[appMenuBaseComponent]',
  standalone: true
})
export class MenuBaseComponentDirective implements OnInit, OnDestroy {
  protected readonly themeService = inject(ThemeService);
  protected readonly languageService = inject(LanguageService);
  protected readonly activePageService = inject(ActivePageService);
  protected readonly snackbarService = inject(SnackbarService);
  protected readonly translationService = inject(TranslationService);
  protected readonly easterEggService = inject(EvolutionService);

  /**
   * @protected
   * @description Emits once on {@link ngOnDestroy} to complete all `takeUntil` pipelines.
   */
  protected readonly destroy$ = new Subject<void>();

  navigationButtons: NavigationButton[] = [];
  themeMenu: MenuButton = ThemeMenuButton;
  languageMenu: MenuButton = LanguageMenuButton;
  socialMediaButtons: NavigationButton[] = SocialMediaButtons;

  /**
   * @private
   * @description
   * Tracks the last resolved effective theme. Updated whenever
   * {@link ThemeService.effectiveThemeMode$} emits, used by {@link themeMenuIcon}
   * to display the correct icon when {@link ThemeMode.SystemDefault} is selected.
   */
  private lastEffectiveTheme: ThemeMode = this.themeService.getSystemPreferredTheme();

  /**
   * @description
   * Builds the initial state for {@link themeMenu}, {@link languageMenu}, and
   * {@link navigationButtons}, then subscribes to {@link ThemeService.themeMode$} and
   * {@link LanguageService.currentLanguage$} to keep option `isActive` flags current.
   * @returns {void}
   */
  ngOnInit(): void {
    this.themeService.effectiveThemeMode$.pipe(takeUntil(this.destroy$)).subscribe((effectiveTheme: ThemeMode) => {
      this.lastEffectiveTheme = effectiveTheme;
    });

    this.themeMenu = {
      ...ThemeMenuButton,
      icon: this.themeMenuIcon,
      options: ThemeMenuButton.options?.map(option => ({
        ...option,
        isActive: option.key === this.themeService.themeMode.getValue(),
        method: (): void => this.updateTheme(option.key)
      }))
    };

    this.languageMenu = {
      ...LanguageMenuButton,
      options: LanguageMenuButton.options?.map(option => ({
        ...option,
        isActive: option.key === this.languageService.currentLanguage.getValue(),
        method: (): void => this.updateLanguage(option.key)
      }))
    };

    this.navigationButtons = NavigationButtons.map(button => ({
      ...button,
      method: (): void => button.text.includes('about') ? this.easterEggService.runEasterEgg() : undefined
    }));

    this.themeService.themeMode$.pipe(takeUntil(this.destroy$)).subscribe(selectedTheme => {
      this.themeMenu.options?.forEach(option => option.isActive = option.key === selectedTheme);
      this.themeMenu = { ...this.themeMenu, icon: this.themeMenuIcon };
    });

    this.languageService.currentLanguage$.pipe(takeUntil(this.destroy$)).subscribe(selectedLanguage => {
      this.languageMenu.options?.forEach(option => option.isActive = option.key === selectedLanguage);
    });
  }

  /**
   * @description
   * Resolves the Material icon name for the theme menu trigger. When
   * {@link ThemeMode.SystemDefault} is active, falls back to {@link lastEffectiveTheme}
   * so the icon always reflects the actual rendered appearance rather than the raw selection.
   * @returns {string} `'dark_mode'` or `'light_mode'`.
   */
  get themeMenuIcon(): string {
    const current = this.themeService.themeMode.value;
    const effective = current === ThemeMode.SystemDefault ? this.lastEffectiveTheme : current;

    return effective === ThemeMode.DarkMode ? 'dark_mode' : 'light_mode';
  }

  /**
   * @description
   * Applies a new theme, updates each option's `isActive` flag, refreshes the
   * menu trigger icon, and opens a confirmation snackbar.
   * @param {string} theme - Key of the {@link ThemeMode} enum value to apply.
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
   * Applies a new language, updates each option's `isActive` flag, and opens a
   * confirmation snackbar.
   * @param {string} language - Key of the {@link Language} enum value to apply.
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
   * Replaces a broken image with a standardised fallback icon and applies the
   * `img--fallback` CSS class. The `fallbackApplied` dataset flag prevents an
   * infinite error loop if the fallback asset itself fails to load.
   * @param {HTMLImageElement} imageElement - The image element that fired the error event.
   * @returns {void}
   */
  onImageError(imageElement: HTMLImageElement): void {
    if (imageElement.dataset['fallbackApplied']) {
      return;
    }

    imageElement.dataset['fallbackApplied'] = '1';
    imageElement.src = 'assets/images/icons/error_outline-14px.svg';
    imageElement.classList.add('img--fallback');
  }

  /**
   * @description Completes {@link destroy$} to unsubscribe all `takeUntil` pipelines.
   * @returns {void}
   */
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
