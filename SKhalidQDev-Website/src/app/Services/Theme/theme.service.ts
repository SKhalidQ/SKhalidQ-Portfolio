import { ThemeMode, Themes } from 'src/app/Models/theme';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  themeData = Themes;

  constructor() { }

  themeMode = new BehaviorSubject<string>(this.themeData[ThemeMode.DarkMode].theme);
  themeMode$ = this.themeMode.asObservable();

}
