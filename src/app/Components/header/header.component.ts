import { ActivePageService } from 'src/app/Services/active-page.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EasterEggService } from 'src/app/Services/easter-egg.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ThemeMode, ThemeModel, Themes } from 'src/app/Models/theme';
import { SnackbarService } from 'src/app/Services/snackbar.service';
import { LanguageService } from 'src/app/Services/language.service';
import { SidenavService } from 'src/app/Services/sidenav.service';
import { ThemeService } from 'src/app/Services/theme.service';
import { LanguagesList } from 'src/app/Models/language';

import ThemeTextCast from 'src/assets/JSON/Castellano/ThemeMessage.json';
import ThemeTextEng from 'src/assets/JSON/English/ThemeMessage.json';
import ThemeTextCat from 'src/assets/JSON/Catala/ThemeMessage.json';

import LangTextCast from 'src/assets/JSON/Castellano/Language.json';
import LangTextEng from 'src/assets/JSON/English/Language.json';
import LangTextCat from 'src/assets/JSON/Catala/Language.json';

import RoutesCast from 'src/assets/JSON/Castellano/Routes.json';
import RoutesEng from 'src/assets/JSON/English/Routes.json';
import RoutesCat from 'src/assets/JSON/Catala/Routes.json';

import SocialMedia from 'src/assets/JSON/SocialMedia.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent {

  @Output() toggle = new EventEmitter<void>();
  @Input() isSideNav: boolean | any;

  title = 'My Portfolio';
  isSticky = false;
  smallScreen: boolean | any;
  xSmallScreen: boolean | any;
  currentTheme: ThemeModel | any;

  routeData = RoutesEng;
  socialMediaData = SocialMedia;

  languageData = LanguagesList;
  themeData = Themes;

  currentThemeText = ThemeTextEng;

  constructor(
    breakpointObserver: BreakpointObserver,
    public activePageService: ActivePageService,
    public isSidenavActive: SidenavService,
    public easterEggService: EasterEggService,
    public themeService: ThemeService,
    public router: Router,
    private languageService: LanguageService,
    private snackbarService: SnackbarService) {
    this.currentTheme = this.themeData[ThemeMode.LightMode];

    breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe((x) => {
      this.smallScreen = x.breakpoints[Breakpoints.Small] && !x.breakpoints[Breakpoints.XSmall];
      this.xSmallScreen = x.breakpoints[Breakpoints.XSmall];
    });

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

  onToggle(): void {
    this.toggle.emit();
  }

  get toggleIcon(): string {
    return this.isSideNav === true ? 'clear' : 'menu';
  }

  ChangeTheme(): void {
    let message: string | any;
    console.log(this.themeService.themeMode.getValue());

    switch (this.themeService.themeMode.getValue()) {
      case this.themeData[ThemeMode.LightMode].theme:
        message = this.currentThemeText.message.darkMode;
        this.currentTheme = this.themeData[ThemeMode.DarkMode];
        break;

      case this.themeData[ThemeMode.DarkMode].theme:
        message = this.currentThemeText.message.lightMode;
        this.currentTheme = this.themeData[ThemeMode.LightMode];
        break;

      case this.themeData[ThemeMode.CustomMode].theme: {
        break;
        message = this.currentThemeText.message.customMode;
        this.currentTheme = this.themeData[ThemeMode.LightMode];
      }

      default: break;
    }

    this.themeService.themeMode.next(this.currentTheme.theme);
    this.snackbarService.OpenSnackbar(message, 'Dismiss');
    localStorage.setItem('ThemeMode', this.currentTheme.theme);
  }

  GetThemeIcon(themeMode: string) {
    switch (themeMode) {
      case 'LightMode':
        return 'brightness_3';

      case 'DarkMode':
        return 'wb_sunny';

      case 'CustomMode':
        return 'build';

      default:
        return 'error';
    }
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
        message = LangTextEng.sbMessage.message;
        button = LangTextEng.sbMessage.btnText;
        break;

      case 'Castellano':
        this.languageService.currentLanguage.next('Castellano');
        this.currentThemeText = ThemeTextCast;
        message = LangTextCast.sbMessage.message;
        button = LangTextCast.sbMessage.btnText;
      break;

      case 'Català':
        this.languageService.currentLanguage.next('Català');
        this.currentThemeText = ThemeTextCat;
        message = LangTextCat.sbMessage.message;
        button = LangTextCat.sbMessage.btnText;
      break;
    }

    this.languageService.currentLanguage.next(language);
    this.snackbarService.OpenSnackbar(message, button);
    localStorage.setItem('Lang', language);
  }

  disabled(isDisabled: boolean) {
    return isDisabled ? 'disabled-flags' : '';
  }
}
