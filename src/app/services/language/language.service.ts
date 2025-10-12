import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Language } from 'src/app/models/enums/language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly localStorageLangKey = 'Language';
  private readonly defaultLanguage: Language = this.getInitialLanguage;

  private get getInitialLanguage(): Language {
    const storedLanguage = localStorage.getItem(this.localStorageLangKey);
    if (storedLanguage && Language[storedLanguage as keyof typeof Language]) {
      return Language[storedLanguage as keyof typeof Language];
    }

    // Use the same logic from ngOnInit if localStorage is empty
    const systemLanguage = navigator.language;

    if (systemLanguage.includes('es')) {
      return Language.esES;
    }

    if (systemLanguage.includes('ca')) {
      return Language.caES;
    }

    if (systemLanguage.includes('ur')) {
      return Language.urPK;
    }

    return Language.enGB;
  }

  public setLanguage(language: Language): void {
    localStorage.setItem(this.localStorageLangKey, language);
    this.currentLanguage.next(language);
  }

  currentLanguage = new BehaviorSubject<Language>(this.defaultLanguage);
  currentLanguage$ = this.currentLanguage.asObservable();
}
