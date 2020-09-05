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

  constructor(public pageNameService: PageNameService) { 
    this.pageNameService.sectionName.next('Home');
  }

  onClick() {
    this.progress = false;
  }

  Toggled(toggle: boolean) {
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

  ngOnInit(): void {
    
  }
}
