import { inject, Injectable } from '@angular/core';
import { caES } from 'src/app/languages/ca-es';
import { enGB, LanguageStrings } from 'src/app/languages/en-gb';
import { esES } from 'src/app/languages/es-es';
import { urPK } from 'src/app/languages/ur-pk';
import { Language } from 'src/app/models/enums/language';
import { LanguageService } from '../language/language.service';

@Injectable({
  providedIn: 'root'
})
/**
 * @description
 * Service that provides translated string lookups for the active language.
 * Automatically synchronises with {@link LanguageService} so any language
 * change is reflected immediately in impure pipes and direct consumers.
 */
export class TranslationService {
  private languageString: LanguageStrings = enGB;

  private readonly languageService = inject(LanguageService);

  /**
   * @description
   * Subscribes to {@link LanguageService.currentLanguage$} and keeps the
   * internal language strings in sync for the lifetime of the service.
   */
  constructor() {
    // Subscribe to language changes and update strings automatically
    this.languageService.currentLanguage$.subscribe((currentLanguage) => {
      this.setLanguageStrings(currentLanguage);
    });
  }

  /**
   * @description
   * Switches the active language string bundle.
   * Called automatically when the language observable emits; can also be
   * called manually when needed.
   * @param {Language} language - The {@link Language} to switch to.
   * @returns {void}
   */
  public setLanguageStrings(language: Language): void {
    switch (language) {
      case Language.esES:
        this.languageString = esES;
        break;
      case Language.caES:
        this.languageString = caES;
        break;
      case Language.urPK:
        this.languageString = urPK;
        break;
      case Language.enGB:
      default:
        this.languageString = enGB;
        break;
    }
  }

  /**
   * @description Type-safe top-level key lookup into the current language bundle.
   * @template K
   * @param {K} key - A direct top-level key of {@link LanguageStrings}.
   * @returns {LanguageStrings[K]} The value associated with the key, or the key itself if not found.
   */
  public getText<K extends keyof LanguageStrings>(key: K): LanguageStrings[K] {
    const val = this.languageString[key];
    return (val ?? key) as LanguageStrings[K];
  }

  /**
   * @description Resolves a dot-notation path against the active language bundle.
   * @param {string} path - Dot-notation key path, e.g. `'navigationButtons.home'`.
   * @returns {string} The resolved translation string, or `path` as a fallback.
   */
  public getTextPath(path: string): string;
  /**
   * @description Resolves a dot-notation path and interpolates indexed placeholders.
   * Placeholders in the template use `{0}`, `{1}`, … syntax.
   * @param {string} path - Dot-notation key path.
   * @param {(string | number)[]} replacements - Ordered values to substitute into `{n}` placeholders.
   * @returns {string} The resolved and interpolated translation string.
   */
  public getTextPath(path: string, replacements: (string | number)[]): string;
  public getTextPath(path: string, replacements?: (string | number)[]): string {
    const segments = path.split('.');
    let current: unknown = this.languageString;

    for (const seg of segments) {
      if (current && typeof current === 'object' && seg in current) {
        current = (current as Record<string, unknown>)[seg];
      } else {
        return path; // fallback (or return undefined)
      }
    }

    if (typeof current === 'string') {
      return this.applyReplacements(current, replacements);
    }

    // If it's not a string, convert to string or return the path as fallback
    return typeof current === 'object' ? path : String(current);
  }

  /**
   * @description Substitutes `{n}` indexed placeholders in a template string.
   * @param {string} template - The template string containing `{0}`, `{1}`, … tokens.
   * @param {(string | number)[] | string | number} [replacements] - A single value or array of values to interpolate.
   * @returns {string} The template with all matching placeholders replaced.
   */
  private applyReplacements(template: string, replacements?: (string | number)[] | string | number): string {
    if (replacements == null) {
      return template;
    }

    const array = Array.isArray(replacements) ? replacements : [replacements];

    if (array.length === 0) {
      return template;
    }

    return array.reduce<string>((acc, val, idx) => acc.replace(new RegExp(`\\{${idx}\\}`,'g'), String(val)), template);
  }
}
