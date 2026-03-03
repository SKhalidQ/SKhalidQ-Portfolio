import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Language } from 'src/app/models/enums/language';

@Injectable({
  providedIn: 'root'
})
/**
 * @description
 * Service responsible for managing the application's active language.
 * Resolves the initial language from `localStorage` or the browser locale,
 * and exposes a reactive observable for consumers to subscribe to changes.
 */
export class LanguageService {
  private readonly localStorageLangKey = 'Language';
  private readonly defaultLanguage: Language = this.getInitialLanguage;

  /**
   * @description
   * Determines the initial language on first load.
   * Priority: persisted `localStorage` value → browser locale → fallback to English.
   * @returns {Language} The resolved {@link Language} for the current session.
   */
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

  /**
   * @description
   * Persists and applies a new language selection.
   * Updates `localStorage` and emits through {@link currentLanguage}.
   * @param {Language} language - The {@link Language} to apply.
   * @returns {void}
   */
  public setLanguage(language: Language): void {
    localStorage.setItem(this.localStorageLangKey, language);
    this.currentLanguage.next(language);
  }

  currentLanguage = new BehaviorSubject<Language>(this.defaultLanguage);
  currentLanguage$ = this.currentLanguage.asObservable();
}
