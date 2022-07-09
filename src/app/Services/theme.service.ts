import { ThemeMode, Themes } from '../Models/theme';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() {
    if (localStorage.getItem('ThemeMode') === null || localStorage.getItem('ThemeMode')?.length === 0)
      localStorage.setItem('ThemeMode', Themes[ThemeMode.LightMode].theme);

    if (localStorage.getItem('ThemeMode') === Themes[ThemeMode.CustomMode].theme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      localStorage.setItem('ThemeMode', Themes[ThemeMode.DarkMode].theme);
    else if (localStorage.getItem('ThemeMode') === Themes[ThemeMode.CustomMode].theme && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches)
      localStorage.setItem('ThemeMode', Themes[ThemeMode.LightMode].theme);
  }

  themeMode = new BehaviorSubject<string | any>(localStorage.getItem('ThemeMode') || Themes[ThemeMode.LightMode].theme);
  themeMode$ = this.themeMode.asObservable();
}
