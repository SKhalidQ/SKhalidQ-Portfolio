import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PageNameService } from 'src/app/Services/page-name.service';
import { ThemeModesService } from 'src/app/Services/theme-modes.service';
import  *  as  data  from  '../../Languages/languages.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggle = new EventEmitter<void>();

  title: string = 'SKhalidQDev';
  progress: boolean = false;
  iFrame: boolean = false;
  isToggled: boolean = false;
  lightMode: boolean = false;
  activeRoute: string = "activeRouteDark";
  themeIcon: string = "wb_sunny"
  sectionName = "Home";
  currentLanguage = "English";
  showFiller = false;
  smallScreen: boolean;
  xSmallScreen: boolean;
  
  //Language
  engLang: any = data['default'][0];
  castLang: any = data['default'][1];
  catLang: any = data['default'][2];

  defaultThemeString: string = "LightBtn";
  themeBtn: string = this.engLang['LightBtn'];

  CurriculumBtn: string = this.engLang['CurriculumBtn'];
  ProjectsBtn: string = this.engLang['ProjectsBtn'];
  AboutBtn: string = this.engLang['AboutBtn'];
  EngBtn: string = this.engLang['EngBtn'];
  CastBtn: string = this.engLang['CastBtn'];
  CatBtn: string = this.engLang['CatBtn'];

  constructor(public pageNameService: PageNameService, private themeModeService: ThemeModesService, breakpointObserver: BreakpointObserver) { 
    this.pageNameService.sectionName.next('Home');
    breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe((x) => {
      this.smallScreen = x.breakpoints[Breakpoints.Small] && !x.breakpoints[Breakpoints.XSmall];
      this.xSmallScreen = x.breakpoints[Breakpoints.XSmall];
    });
  }

  ngOnInit(): void {
  }

  onToggle() {
    this.toggle.emit();
  }

  Changetheme(toggle: boolean) {
    this.isToggled = toggle;
    if (toggle) {
      this.lightMode = true;
      this.themeIcon = "brightness_3";
      this.themeBtn = this.GetLangString(this.currentLanguage, "DarkBtn");
      this.defaultThemeString = "DarkBtn";
      this.activeRoute = "activeRouteLight"
      this.themeModeService.themeMode.next(this.lightMode);
    } else {
      this.lightMode = false;
      this.themeBtn = this.GetLangString(this.currentLanguage, "LightBtn");
      this.defaultThemeString = "LightBtn";
      this.themeIcon = "wb_sunny";
      this.activeRoute = "activeRouteDark"
      this.themeModeService.themeMode.next(this.lightMode);
    }
  }

  ChangeLanguage(language: string) {
    if (language == "English") {
      this.currentLanguage = language;
      this.CurriculumBtn = this.engLang['CurriculumBtn'];
      this.ProjectsBtn = this.engLang['ProjectsBtn'];
      this.AboutBtn = this.engLang['AboutBtn'];
      this.EngBtn = this.engLang['EngBtn'];
      this.CastBtn = this.engLang['CastBtn'];
      this.CatBtn = this.engLang['CatBtn'];
      this.themeBtn = this.GetLangString(this.currentLanguage, this.defaultThemeString);
    } else if (language == "Castellano") {
      this.currentLanguage = language;
      this.CurriculumBtn = this.castLang['CurriculumBtn'];
      this.ProjectsBtn = this.castLang['ProjectsBtn'];
      this.AboutBtn = this.castLang['AboutBtn'];
      this.EngBtn = this.castLang['EngBtn'];
      this.CastBtn = this.castLang['CastBtn'];
      this.CatBtn = this.castLang['CatBtn'];
      this.themeBtn = this.GetLangString(this.currentLanguage, this.defaultThemeString);
    } else if (language == "Català") {
      this.currentLanguage = language;
      this.CurriculumBtn = this.catLang['CurriculumBtn'];
      this.ProjectsBtn = this.catLang['ProjectsBtn'];
      this.AboutBtn = this.catLang['AboutBtn'];
      this.EngBtn = this.catLang['EngBtn'];
      this.CastBtn = this.catLang['CastBtn'];
      this.CatBtn = this.catLang['CatBtn'];
      this.themeBtn = this.GetLangString(this.currentLanguage, this.defaultThemeString);
    }
  }

  GetLangString(language: string, word: string) {
    if (language == 'English') {
      return this.engLang[word];
    } else if (language == 'Castellano') {
      return this.castLang[word];
    } else if (language == 'Català') {
      return this.catLang[word];
    }
  }

}
