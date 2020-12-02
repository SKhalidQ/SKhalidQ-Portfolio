import { ThemeMode, ThemeModel, Themes } from 'src/app/Models/theme';
import { SnackbarService } from 'src/app/Services/snackbar.service';
import { ThemeService } from 'src/app/Services/Theme/theme.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { LanguagesList } from 'src/app/Models/language';
import { RouteLinks } from 'src/app/Models/route-Links';
import { EasterEggService } from 'src/app/Services/easter-egg.service';
import { CVImgService } from 'src/app/Services/Theme/cv-img.service';
import { ProjectImgService } from 'src/app/Services/Theme/project-img.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  animations: []
})
export class SideNavComponent {
  // @Output() toggle = new EventEmitter<void>();

  title = 'SKhalidQDev';
  isSidenav = true;
  currentTheme: ThemeModel;
  routeData = RouteLinks;
  languageData = LanguagesList;
  themeData = Themes;

  constructor(
    private themeService: ThemeService,
    private snackbarService: SnackbarService,
    public easterEggService: EasterEggService,
    private cvImgService: CVImgService,
    private projectImgService: ProjectImgService) {
    this.currentTheme = this.themeData[ThemeMode.DarkMode];
  }

  // onToggle(): void {
  //   this.toggle.emit();
  // }


  ChangeTheme(): void {
    if (this.themeService.themeMode.getValue() === 'LightTheme') {
      this.snackbarService.OpenSnackbar('Dark theme enabled', 'Dismiss', this.themeData[ThemeMode.DarkMode].snackbar);
      this.currentTheme = this.themeData[ThemeMode.DarkMode];
      this.cvImgService.cvImage.next('../assets/Images/CVPreviewDark.png');
      this.projectImgService.projectImage.next('../assets/Images/ProjectPreviewDark.png');
      this.themeService.themeMode.next(this.currentTheme.theme);
    } else {
      this.snackbarService.OpenSnackbar('Light theme enabled', 'Dismiss', this.themeData[ThemeMode.LightMode].snackbar);
      this.currentTheme = this.themeData[ThemeMode.LightMode];
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
