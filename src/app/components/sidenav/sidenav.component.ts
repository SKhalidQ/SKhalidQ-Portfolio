import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { LanguageMenuButton } from 'src/app/models/data/language-menu-buttons';
import { NavigationButtons } from 'src/app/models/data/navigation-buttons';
import { SocialMediaButtons } from 'src/app/models/data/social-media-buttons';
import { ThemeMenuButton } from 'src/app/models/data/theme-menu-buttons';
import { Language } from 'src/app/models/enums/language';
import { ThemeMode } from 'src/app/models/enums/theme-mode';
import { MenuButton, MenuOption } from 'src/app/models/interfaces/menu';
import { NavigationButton } from 'src/app/models/interfaces/navigation-button';
import { EvolutionService } from 'src/app/services/easter-egg/evolution.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { TranslationService } from 'src/app/services/translation/translation.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
/**
 * @description
 * Smart component that renders the slide-in side navigation panel.
 * Mirrors the theme and language controls from the header and adds
 * navigation links. Emits {@link toggleSidenav} to request the sidenav
 * to close (delegated to the parent layout component).
 */
export class SidenavComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();

  public readonly themeService = inject(ThemeService);
  private readonly languageService = inject(LanguageService);
  private readonly translationService = inject(TranslationService);
  private readonly snackbarService = inject(SnackbarService);
  private readonly easterEggService = inject(EvolutionService);

  navigationButtons: NavigationButton[] = NavigationButtons;
  themeMenu: MenuButton = ThemeMenuButton;
  languageMenu: MenuButton = LanguageMenuButton;
  socialMediaButtons: NavigationButton[] = SocialMediaButtons;

  /**
   * @description
   * Initialises theme menu, language menu, and navigation button options with
   * their active states, bound action callbacks, and sidenav-close integration.
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
      method: (): void => {
        if (button.text.includes('about')) {
          this.easterEggService.runEasterEgg();
        }

        this.closeSidenav();
      }
    }));
  }

  /**
   * @description
   * Emits the {@link toggleSidenav} output to request the parent to close
   * the sidenav. Stored as an arrow function so it can be passed as a callback
   * reference to child components without losing `this` context.
   * @returns {void}
   */
  closeSidenav = (): void => {
    this.toggleSidenav.emit();
  };

  /**
   * @description
   * Computes the Material icon name for the theme menu trigger button.
   * Delegates to {@link ThemeService.getEffectiveThemeMode} to correctly
   * resolve `SystemDefault` to the actual OS preference.
   * @returns {string} `'dark_mode'` or `'light_mode'`.
   */
  get themeMenuIcon(): string {
    return this.themeService.getEffectiveThemeMode() === ThemeMode.DarkMode ? 'dark_mode' : 'light_mode';
  }

  /**
   * @description
   * Applies a new theme selection, updates active states on the options,
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
   * Applies a new language selection, updates active states on the options,
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
  public onImageError(imageElement: HTMLImageElement): void {
    if ((imageElement.dataset)['fallbackApplication']) {
      return;
    }

    (imageElement.dataset)['fallbackApplied'] = '1';
    imageElement.src = 'assets/images/icons/error_outline-14px.svg';
    imageElement.classList.add('img--fallback');
  }
}
