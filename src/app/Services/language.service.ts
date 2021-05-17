import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  currentLanguage = new BehaviorSubject<string>(localStorage.getItem('Lang') || 'English');
  currentLanguage$ = this.currentLanguage.asObservable();
}
