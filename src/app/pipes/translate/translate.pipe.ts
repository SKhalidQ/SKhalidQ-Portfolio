import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslationService } from '../../services/translation/translation.service';

@Pipe({
  name: 'translate',
  // impure so it re-runs when the internal languageString changes
  pure: false
})
export class TranslatePipe implements PipeTransform {
  private readonly translationService = inject(TranslationService);

  // path: dot notation string (e.g. "navigationButtons.home")
  // fallback (optional): value to return if lookup fails or points to an object
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
      ? this.translationService.getTextPath(trimmed, replacements)
      : this.translationService.getTextPath(trimmed);

    if ((value && typeof value === 'object') || value === trimmed) {
      return fallback ?? trimmed;
    }

    return String(value);
  }

}
