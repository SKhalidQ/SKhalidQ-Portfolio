import { Injectable } from '@angular/core';
import { ThemeMode, Themes } from 'src/app/Models/theme';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  themeData = Themes;

  constructor() { }

  themeMode = new BehaviorSubject<string>(this.themeData[ThemeMode.LightMode].theme);
  themeMode$ = this.themeMode.asObservable();

}
