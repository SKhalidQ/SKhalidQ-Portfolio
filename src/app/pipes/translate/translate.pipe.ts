import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslationService } from '../../services/translation/translation.service';

@Pipe({
  name: 'translate',
  // impure so it re-runs when the internal languageString changes
  pure: false
})
export class TranslatePipe implements PipeTransform {
  private readonly translationService = inject(TranslationService);

  constructor() { }

  // path: dot notation string (e.g. "navigationButtons.home")
  // fallback (optional): value to return if lookup fails or points to an object
  transform(path: string, fallbackOrReplacements?: string | Array<string | number>, ...restReplacements: Array<string | number>): string {
    if (path == null || path === '') {
      return '';
    }

    const trimmed = path.trim();

    if (!trimmed) {
      return '';
    }

    let fallback: string | undefined;
    let replacements: Array<string | number> | undefined;

    if (Array.isArray(fallbackOrReplacements)) {
      replacements = fallbackOrReplacements;
    } else {
      fallback = fallbackOrReplacements;
      replacements = restReplacements && restReplacements.length ? restReplacements : undefined;
    }

    const value: any = replacements
      ? this.translationService.getTextPath(trimmed as any, replacements)
      : this.translationService.getTextPath(trimmed as any);

    if ((value && typeof value === 'object') || value === trimmed) {
      return fallback ?? trimmed;
    }

    return String(value);
  }

}
