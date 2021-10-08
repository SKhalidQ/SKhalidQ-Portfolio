import { EasterEggService } from 'src/app/Services/easter-egg.service';
import { ThemeMode, ThemeModel, Themes } from 'src/app/Models/theme';
import { SnackbarService } from 'src/app/Services/snackbar.service';
import { LanguageService } from 'src/app/Services/language.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeService } from 'src/app/Services/theme.service';
import { LanguagesList } from 'src/app/Models/language';

import ThemeTextCast from 'src/assets/JSON/Castellano/ThemeMessage.json';
import ThemeTextEng from 'src/assets/JSON/English/ThemeMessage.json';
import ThemeTextCat from 'src/assets/JSON/Catala/ThemeMessage.json';

import RoutesCast from 'src/assets/JSON/Castellano/Routes.json';
import RoutesEng from 'src/assets/JSON/English/Routes.json';
import RoutesCat from 'src/assets/JSON/Catala/Routes.json';

import SocialMedia from 'src/assets/JSON/SocialMedia.json';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  @Output() toggle = new EventEmitter<void>();

  currentTheme: ThemeModel;
  
  languageData = LanguagesList;
  themeData = Themes;

  routeData = RoutesEng;
  socialMediaData = SocialMedia;
  btnTheme = ThemeTextEng.btnText;
  currentThemeText = ThemeTextEng;
  
  isSidenav = true;

  constructor(
    public themeService: ThemeService,
    private snackbarService: SnackbarService,
    public easterEggService: EasterEggService,
    private languageService: LanguageService) {
    this.currentTheme = this.themeData[ThemeMode.LightMode];

    languageService.currentLanguage$.subscribe(
      (response: string) => {
        switch (response) {
          case 'English':
            this.routeData = RoutesEng;
            this.languageData[0].activeLang = true;
            this.languageData[1].activeLang = false;
            this.languageData[2].activeLang = false;
          break;

          case 'Castellano':
            this.routeData = RoutesCast;
            this.languageData[0].activeLang = false;
            this.languageData[1].activeLang = true;
            this.languageData[2].activeLang = false;
          break;

          case 'Català':
            this.routeData = RoutesCat;
            this.languageData[0].activeLang = false;
            this.languageData[1].activeLang = false;
            this.languageData[2].activeLang = true;
          break;
        
          default: break;
        }
      }
    );
  }
  
  ChangeTheme(): void {
    let message: string | any;

    switch (this.themeService.themeMode.getValue()) {
      case this.themeData[ThemeMode.LightMode].theme:
        message = this.currentThemeText.message.darkMode;
        this.currentTheme = this.themeData[ThemeMode.DarkMode];
        this.socialMediaData[2].icon.replace('dark', 'light');
        break;

      case this.themeData[ThemeMode.DarkMode].theme:
        message = this.currentThemeText.message.lightMode;
        this.currentTheme = this.themeData[ThemeMode.LightMode];
        this.socialMediaData[2].icon.replace('light', 'dark');
        break;

      default: break;
    }

    this.themeService.themeMode.next(this.currentTheme.theme);
    this.snackbarService.OpenSnackbar(message, 'Dismiss');
    localStorage.setItem('ThemeMode', this.currentTheme.theme);
  }

  GetIcon(socialMedia: any) {
    if (socialMedia.btnText === 'GitHub' && this.themeService.themeMode.value === 'LightMode') {
      return socialMedia.icon.replace('light', 'dark');
    } else if (socialMedia.btnText === 'GitHub' && this.themeService.themeMode.value === 'DarkMode') {
      return socialMedia.icon.replace('dark', 'light');
    } else {
      return socialMedia.icon;
    }
  }

  ChangeLanguage(language: string): void {
    let message = '';
    let button = '';

    switch (language) {
      case 'English':
        this.languageService.currentLanguage.next('English');
        this.currentThemeText = ThemeTextEng;
        this.btnTheme = ThemeTextEng.btnText;
        message = 'Language set to English';
        button = 'Dismiss';
        break;
        
      case 'Castellano':
        this.languageService.currentLanguage.next('Castellano');
        this.currentThemeText = ThemeTextCast;
        this.btnTheme = ThemeTextCast.btnText;
        message = 'Idioma establecido a Castellano';
        button = 'Descartar';
      break;
        
      case 'Català':
        this.languageService.currentLanguage.next('Català');
        this.currentThemeText = ThemeTextCat;
        this.btnTheme = ThemeTextCat.btnText;
        message = 'Idioma definit a Català';
        button = 'Descartar';
      break;
    }

    this.languageService.currentLanguage.next(language);
    this.snackbarService.OpenSnackbar(message, button);
    localStorage.setItem('Lang', language);
  }

}
