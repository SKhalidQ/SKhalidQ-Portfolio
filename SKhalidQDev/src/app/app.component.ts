import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageNameService } from './Services/page-name.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{
  
  title: string = 'SKhalidQDev';
  progress: boolean = false;
  iFrame: boolean = false;
  isToggled: boolean = false;
  lightMode: boolean = false;
  activeRoute: string = "activeRouteDark";
  themeMode: string = "Light";
  themeIcon: string = "wb_sunny"
  sectionName = "Home";
  currentLanguage = "English";

  constructor(public pageNameService: PageNameService) { 
    this.pageNameService.sectionName.next('Home');
  }

  onClick() {
    this.progress = false;
  }

  Changetheme(toggle: boolean) {
    this.isToggled = toggle;
    if (toggle) {
      this.lightMode = true;
      this.themeIcon = "brightness_3";
      this.themeMode = "Dark";
      this.activeRoute = "activeRouteLight"
    } else {
      this.lightMode = false;
      this.themeMode = "Light";
      this.themeIcon = "wb_sunny";
      this.activeRoute = "activeRouteDark"
    }
  }

  ChangeLanguage(language: string) {
    if (language == "English") {
      this.currentLanguage = language;
    } else if (language == "Castellano") {
      this.currentLanguage = language;
    } else if (language == "Català") {
      this.currentLanguage = language;
    }
    console.log(this.currentLanguage);
  }

  ngOnInit(): void {
    
  }
}
