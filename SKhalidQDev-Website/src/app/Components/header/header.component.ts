import { GithubLogoService } from 'src/app/Services/Theme/github-logo.service';
import { RouteLinks, SocialMediaLinks } from 'src/app/Models/route-Links';
import { ActivePageService } from 'src/app/Services/active-page.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ThemeMode, ThemeModel, Themes } from 'src/app/Models/theme';
import { SnackbarService } from 'src/app/Services/snackbar.service';
import { ThemeService } from 'src/app/Services/Theme/theme.service';
import { SidenavService } from 'src/app/Services/sidenav.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { LanguagesList } from 'src/app/Models/language';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() toggle = new EventEmitter<void>();
 
  title: string = "SKhalidQDev";
  isSideNav: boolean = false;
  isSticky: boolean = false;
  smallScreen: boolean;
  xSmallScreen: boolean;
  currentTheme: ThemeModel;
  routeData = RouteLinks;
  socialMediaData = SocialMediaLinks;
  languageData = LanguagesList;
  themeData = Themes;
  
  constructor(
      private breakpointObserver: BreakpointObserver,
      public activePageService: ActivePageService,
      public isSidenavActive: SidenavService,
      private themeService: ThemeService,
      private githubLogoService: GithubLogoService,
      private snackbarService: SnackbarService) { 
      this.currentTheme = this.themeData[ThemeMode.DarkMode];

    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe((x) => {
      this.smallScreen = x.breakpoints[Breakpoints.Small] && !x.breakpoints[Breakpoints.XSmall];
      this.xSmallScreen = x.breakpoints[Breakpoints.XSmall];
    });
  }

  onToggle() {
    this.toggle.emit();
  }

  ChangeTheme() {
    if (this.themeService.themeMode.getValue() == "LightTheme") {
      this.snackbarService.OpenSnackbar('Dark theme enabled', 'Dismiss', this.themeData[ThemeMode.DarkMode].snackbar);
      this.currentTheme = this.themeData[ThemeMode.DarkMode];
      this.githubLogoService.githubLogo.next('../assets/Images/github-brands-light.svg');
      this.themeService.themeMode.next(this.currentTheme.theme);
    } else {
      this.snackbarService.OpenSnackbar('Light theme enabled', 'Dismiss', this.themeData[ThemeMode.LightMode].snackbar);
      this.currentTheme = this.themeData[ThemeMode.LightMode];
      this.githubLogoService.githubLogo.next('../assets/Images/github-brands-dark.svg');
      this.themeService.themeMode.next(this.currentTheme.theme);
    }
  }

  ChangeLanguage(language: string) {
    var message = '';
    var button = '';

    switch (language) {
      case 'English': message = 'Language set to English'; button = 'Dismiss'; break;
      case 'Spanish': message = 'Idioma establecido a Castellano'; button = 'Descartar'; break;
      case 'Catalan': message = 'Idioma definit a Català'; button = 'Descartar'; break;
    }
    
    this.snackbarService.OpenSnackbar(message, button, this.currentTheme.snackbar);
  }

}
