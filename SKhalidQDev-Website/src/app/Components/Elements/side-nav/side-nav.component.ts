import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LanguagesList } from 'src/app/Models/language-Models';
import { RouteLinks } from 'src/app/Models/route-Links';
import { ThemeMode, Themes } from 'src/app/Models/theme-Models';
import { SnackbarService } from 'src/app/Services/Snackbar/snackbar.service';
import { ThemeService } from 'src/app/Services/Theme/theme.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Output() toggle = new EventEmitter<void>();

  title = "SKhalidQDev";
  currentTheme: ThemeMode;
  routeData = RouteLinks;
  languageData = LanguagesList;
  themeData = Themes;

  constructor (private themeService: ThemeService, private snackbarService: SnackbarService) { 
    this.currentTheme = this.themeData[0];
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
      this.themeService.themeMode.next(this.currentTheme.theme);
    } else {
      this.snackbarService.OpenSnackbar('Light theme enabled', 'Dismiss', 'sbarLTheme');
      this.currentTheme = this.themeData[1];
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
