import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ButtonText, LanguagesList } from 'src/app/Models/language-Models';
import { RouteLinks, SocialMediaLinks } from 'src/app/Models/route-Links';
import { ThemeMode, Themes } from 'src/app/Models/theme-Models';
import { ActivePageService } from 'src/app/Services/ActivePage/active-page.service';
import { SidenavService } from 'src/app/Services/sidenav/sidenav.service';
import { SnackbarService } from 'src/app/Services/Snackbar/snackbar.service';
import { GithubLogoService } from 'src/app/Services/Theme/github-logo.service';
import { ThemeService } from 'src/app/Services/Theme/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggle = new EventEmitter<void>();
 
  title: string = "SKhalidQDev";
  isSideNav: boolean = false;
  isSticky: boolean = false;
  smallScreen: boolean;
  xSmallScreen: boolean;
  currentTheme: ThemeMode;
  routeData = RouteLinks;
  socialMediaData = SocialMediaLinks;
  languageData = LanguagesList;
  themeData = Themes;
  buttonText = ButtonText;

  constructor(
      private breakpointObserver: BreakpointObserver,
      public activePageService: ActivePageService,
      public isSidenavActive: SidenavService,
      private themeService: ThemeService,
      private githubLogoService: GithubLogoService,
      private snackbarService: SnackbarService) { 
      this.currentTheme = this.themeData[0];

    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe((x) => {
      this.smallScreen = x.breakpoints[Breakpoints.Small] && !x.breakpoints[Breakpoints.XSmall];
      this.xSmallScreen = x.breakpoints[Breakpoints.XSmall];
    });
  }

  ngOnInit(): void {

  }

  onToggle() {
    this.toggle.emit();
  }

  ChangeTheme() {
    if (this.themeService.themeMode.getValue() == "LightTheme") {
      this.snackbarService.OpenSnackbar('Dark theme enabled', 'Dismiss', 'sbarDTheme');
      this.currentTheme = this.themeData[0];
      this.githubLogoService.githubLogo.next('../assets/Images/github-brands-light.svg');
      this.themeService.themeMode.next(this.currentTheme.theme);
    } else {
      this.snackbarService.OpenSnackbar('Light theme enabled', 'Dismiss', 'sbarLTheme');
      this.currentTheme = this.themeData[1];
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
