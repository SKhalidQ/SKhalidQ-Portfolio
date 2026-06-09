import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslationService } from '../../services/translation/translation.service';

@Pipe({
  name: 'translate',
  // impure so it re-runs when the internal languageString changes
  pure: false
})
/**
 * @description
 * Impure Angular pipe that resolves a dot-notation translation key to the
 * translated string for the currently active language.
 *
 * The pipe is **impure** so it re-evaluates whenever the internal language
 * bundle changes, ensuring all bound expressions update reactively on
 * language switches without requiring an explicit change-detection trigger.
 *
 * @example
 * ```html
 * {{ 'navigationButtons.home' | translate }}
 * {{ 'snackbar.themeChanged' | translate:[themeName] }}
 * ```
 */
export class TranslatePipe implements PipeTransform {
  private readonly translationService = inject(TranslationService);

  /**
   * @description Resolves a translation key path, optionally interpolating replacement values.
   * @param {string} path - Dot-notation key path into the active language bundle, e.g. `'navigationButtons.home'`.
   * @param {string | (string | number)[]} [fallbackOrReplacements] - Either a fallback string to use when the key is not found,
   *   or an array of replacement values for `{n}` placeholders.
   * @param {...(string | number)} restReplacements - Additional replacement values when `fallbackOrReplacements` is a string fallback.
   * @returns {string} The resolved and interpolated translation string, the fallback, or the original path.
   */
  transform(path: string, fallbackOrReplacements?: string | (string | number)[], ...restReplacements: (string | number)[]): string {
    if (path == null || path === '') {
      return '';
    }

    const trimmed = path.trim();

    if (!trimmed) {
      return '';
    }

    let fallback: string | undefined;
    let replacements: (string | number)[] | undefined;

    if (Array.isArray(fallbackOrReplacements)) {
      replacements = fallbackOrReplacements;
    } else {
      fallback = fallbackOrReplacements;
      replacements = restReplacements && restReplacements.length ? restReplacements : undefined;
    }

    const value: string = replacements
      ? this.translationService.getText(trimmed, replacements)
      : this.translationService.getText(trimmed);

    if ((value && typeof value === 'object') || value === trimmed) {
      return fallback ?? trimmed;
    }

    return String(value);
  }

}
