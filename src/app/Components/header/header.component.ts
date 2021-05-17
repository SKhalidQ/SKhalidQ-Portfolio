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

import RoutesCast from 'src/assets/JSON/Castellano/Routes.json';
import RoutesEng from 'src/assets/JSON/English/Routes.json';
import RoutesCat from 'src/assets/JSON/Catala/Routes.json';

import SocialMedia from 'src/assets/JSON/SocialMedia.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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
    private languageService: LanguageService,
    private snackbarService: SnackbarService) {
    this.currentTheme = this.themeData[ThemeMode.LightMode];

    breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe((x) => {
      this.smallScreen = x.breakpoints[Breakpoints.Small] && !x.breakpoints[Breakpoints.XSmall];
      this.xSmallScreen = x.breakpoints[Breakpoints.XSmall];
    });

    languageService.currentLanguage$.subscribe(
      (response: string) => {
        if (response.startsWith('En')) {
          this.routeData = RoutesEng;
        } else if (response.startsWith('Cas')) {
          this.routeData = RoutesCast;
        } else if (response.startsWith('Cat')) {
          this.routeData = RoutesCat;
        } else {
          this.routeData = RoutesEng;
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

    switch (this.themeService.themeMode.getValue()) {
      case this.themeData[ThemeMode.LightMode].theme:
        message = this.currentThemeText.message.darkMode;
        this.currentTheme = this.themeData[ThemeMode.DarkMode];
        break;

      case this.themeData[ThemeMode.DarkMode].theme:
        message = this.currentThemeText.message.lightMode;
        this.currentTheme = this.themeData[ThemeMode.LightMode];
        break;

      default: break;
    }

    this.themeService.themeMode.next(this.currentTheme.theme);
    this.snackbarService.OpenSnackbar(message, 'Dismiss');
    localStorage.setItem('ThemeMode', this.currentTheme.theme);
  }

  ChangeLanguage(language: string): void {
    let message = '';
    let button = '';

    switch (language) {
      case 'English':
        this.routeData = RoutesEng;
        this.currentThemeText = ThemeTextEng;
        message = 'Language set to English';
        button = 'Dismiss';
        break;

      case 'Castellano':
        this.routeData = RoutesCast;
        this.currentThemeText = ThemeTextCast;
        message = 'Idioma establecido a Castellano';
        button = 'Descartar';
        break;

      case 'Catala':
        this.routeData = RoutesCat;
        this.currentThemeText = ThemeTextCat;
        message = 'Idioma definit a Català';
        button = 'Descartar';
        break;
    }

    this.languageService.currentLanguage.next(language);
    this.snackbarService.OpenSnackbar(message, button);
    localStorage.setItem('Lang', language);
  }


}
