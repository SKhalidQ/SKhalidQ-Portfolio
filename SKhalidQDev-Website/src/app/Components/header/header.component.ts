import { GithubLogoService } from 'src/app/Services/Theme/github-logo.service';
import { RouteLinks, SocialMediaLinks } from 'src/app/Models/route-Links';
import { ActivePageService } from 'src/app/Services/active-page.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ThemeMode, ThemeModel, Themes } from 'src/app/Models/theme';
import { SnackbarService } from 'src/app/Services/snackbar.service';
import { ThemeService } from 'src/app/Services/Theme/theme.service';
import { SidenavService } from 'src/app/Services/sidenav.service';
import { LanguagesList } from 'src/app/Models/language';
import { OverlayContainer } from '@angular/cdk/overlay';
import { EasterEggService } from 'src/app/Services/easter-egg.service';
import { CVImgService } from 'src/app/Services/Theme/cv-img.service';
import { ProjectImgService } from 'src/app/Services/Theme/project-img.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: []
})
export class HeaderComponent {

  @Output() toggle = new EventEmitter<void>();
  @Input() isSideNav: boolean;
  title = 'SKhalidQDev';
  isSticky = false;
  smallScreen: boolean;
  xSmallScreen: boolean;
  currentTheme: ThemeModel;
  routeData = RouteLinks;
  socialMediaData = SocialMediaLinks;
  languageData = LanguagesList;
  themeData = Themes;

  constructor(
    breakpointObserver: BreakpointObserver,
    public activePageService: ActivePageService,
    public isSidenavActive: SidenavService,
    public easterEggService: EasterEggService,
    private themeService: ThemeService,
    private githubLogoService: GithubLogoService,
    private cvImgService: CVImgService,
    private projectImgService: ProjectImgService,
    private snackbarService: SnackbarService,
    private overlayContainer: OverlayContainer) {

    // this.overlayContainer.getContainerElement().classList.replace('cdk-overlay-container','LightTheme');
    this.currentTheme = this.themeData[ThemeMode.DarkMode];

    breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe((x) => {
      this.smallScreen = x.breakpoints[Breakpoints.Small] && !x.breakpoints[Breakpoints.XSmall];
      this.xSmallScreen = x.breakpoints[Breakpoints.XSmall];
    });
  }

  onToggle(): void {
    this.toggle.emit();
  }

  get toggleIcon(): string {
    return this.isSideNav === true ? 'clear' : 'menu';
  }

  ChangeTheme(): void {
    if (this.themeService.themeMode.getValue() === 'LightTheme') {
      // this.overlayContainer.getContainerElement().classList.replace('LightTheme','DarkTheme');
      this.snackbarService.OpenSnackbar('Dark theme enabled', 'Dismiss', this.themeData[ThemeMode.DarkMode].snackbar);
      this.currentTheme = this.themeData[ThemeMode.DarkMode];
      this.githubLogoService.githubLogo.next('../assets/Images/github-brands-light.svg');
      this.cvImgService.cvImage.next('../assets/Images/CVPreviewDark.png');
      this.projectImgService.projectImage.next('../assets/Images/ProjectPreviewDark.png');
      this.themeService.themeMode.next(this.currentTheme.theme);
    } else {
      // this.overlayContainer.getContainerElement().classList.replace('DarkTheme','LightTheme');
      console.log(this.overlayContainer.getContainerElement().classList);
      this.snackbarService.OpenSnackbar('Light theme enabled', 'Dismiss', this.themeData[ThemeMode.LightMode].snackbar);
      this.currentTheme = this.themeData[ThemeMode.LightMode];
      this.githubLogoService.githubLogo.next('../assets/Images/github-brands-dark.svg');
      this.cvImgService.cvImage.next('../assets/Images/CVPreviewLight.png');
      this.projectImgService.projectImage.next('../assets/Images/ProjectPreviewLight.png');
      this.themeService.themeMode.next(this.currentTheme.theme);
    }
  }

  ChangeLanguage(language: string): void {
    let message = '';
    let button = '';

    switch (language) {
      case 'English': message = 'Language set to English'; button = 'Dismiss'; break;
      case 'Spanish': message = 'Idioma establecido a Castellano'; button = 'Descartar'; break;
      case 'Catalan': message = 'Idioma definit a Català'; button = 'Descartar'; break;
    }

    this.snackbarService.OpenSnackbar(message, button, this.currentTheme.snackbar);
  }

}
