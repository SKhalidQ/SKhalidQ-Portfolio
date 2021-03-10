import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThemeMode, Themes } from '../Models/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  themeMode = new BehaviorSubject<string>(localStorage.getItem('ThemeMode') || Themes[ThemeMode.LightMode].theme);
  themeMode$ = this.themeMode.asObservable();
}
