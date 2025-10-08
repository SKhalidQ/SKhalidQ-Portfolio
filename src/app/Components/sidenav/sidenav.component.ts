import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { LanguageMenuButton } from 'src/app/models/data/LanguageMenuButtons';
import { NavigationButtons } from 'src/app/models/data/NavigationButtons';
import { SocialMediaButtons } from 'src/app/models/data/SocialMediaButtons';
import { ThemeMenuButton } from 'src/app/models/data/ThemeMenuButtons';
import { Language } from 'src/app/models/enums/Language';
import { ThemeMode } from 'src/app/models/enums/ThemeMode';
import { MenuButton, MenuOption } from 'src/app/models/interfaces/Menu';
import { NavigationButton } from 'src/app/models/interfaces/NavigationButton';
import { EvolutionService } from 'src/app/services/easterEgg/evolution.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { TranslationService } from 'src/app/services/translation/translation.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
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

  ngOnInit(): void {
    this.themeMenu = {
      ...ThemeMenuButton,
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
      method: () => {
        if (button.text === this.translationService.getTextPath('navigationButtons.about')) {
          this.easterEggService.runEasterEgg();
        }

        this.closeSidenav();
      }
    }));
  }

  closeSidenav = () => {
    this.toggleSidenav.emit();
  };

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
}
