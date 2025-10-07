import { Injectable, inject } from '@angular/core';
import { caESLanguage } from 'src/app/languages/caES';
import { enGBLanguage, LanguageStrings } from 'src/app/languages/enGB';
import { esESLanguage } from 'src/app/languages/esES';
import { urPKLanguage } from 'src/app/languages/urPK';
import { Language } from 'src/app/models/enums/Language';
import { LanguageService } from '../language/language.service';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private languageString: LanguageStrings = enGBLanguage;

  private readonly languageService = inject(LanguageService);

  constructor() {
    // Subscribe to language changes and update strings automatically
    this.languageService.currentLanguage$.subscribe((currentLanguage) => {
      this.setLanguageStrings(currentLanguage);
    });
  }

  public setLanguageStrings(language: Language): void {
    switch (language) {
      case Language.esES:
        this.languageString = esESLanguage;
        break;
      case Language.caES:
        this.languageString = caESLanguage;
        break;
      case Language.urPK:
        this.languageString = urPKLanguage;
        break;
      case Language.enGB:
      default:
        this.languageString = enGBLanguage;
        break;
    }
  }

  public getText<K extends keyof LanguageStrings>(key: K): LanguageStrings[K] {
    const val = this.languageString[key];
    return (val ?? key) as LanguageStrings[K];
  }

  // Overloads for type safety (top-level or one nested level)
  public getTextPath<K extends keyof LanguageStrings>(path: K): LanguageStrings[K];
  public getTextPath<K extends keyof LanguageStrings>(path: K, replacements: Array<string | number>): string;
  public getTextPath<P1 extends keyof LanguageStrings, P2 extends keyof LanguageStrings[P1]>(path: `${Extract<P1,string>}.${Extract<P2,string>}`): LanguageStrings[P1][P2];
  public getTextPath<P1 extends keyof LanguageStrings, P2 extends keyof LanguageStrings[P1]>(path: `${Extract<P1,string>}.${Extract<P2,string>}`, replacements: Array<string | number>): string;
  public getTextPath(path: string, replacements?: Array<string | number>): any {
    const segments = path.split('.');
    let current: any = this.languageString;

    for (const seg of segments) {
      if (current && typeof current === 'object' && seg in current) {
        current = current[seg];
      } else {
        return path; // fallback (or return undefined)
      }
    }
    if (typeof current === 'string') {
      return this.applyReplacements(current, replacements);
    }
    return current; // object or other
  }

  private applyReplacements(template: string, replacements?: Array<string | number> | string | number): string {
    if (replacements == null) return template;
    const array = Array.isArray(replacements) ? replacements : [replacements];
    if (array.length === 0) return template;
    return array.reduce<string>((acc, val, idx) => acc.replace(new RegExp(`\\{${idx}\\}`,'g'), String(val)), template);
  }
}
