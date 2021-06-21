import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  themeMode = new BehaviorSubject<string>('DarkTheme');
  themeMode$ = this.themeMode.asObservable();
  
}
