import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ThemeModesService {
  themeMode = new BehaviorSubject<boolean>(false);

  themeMode$ = this.themeMode.asObservable();

  constructor() { }
}
