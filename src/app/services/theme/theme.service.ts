import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, combineLatest, distinctUntilChanged, map } from 'rxjs';
import { ThemeMode } from 'src/app/models/enums/theme-mode';

@Injectable({
  providedIn: 'root'
})
/**
 * @description
 * Service responsible for managing the application theme.
 * Tracks the user-selected theme, the OS-level system preference, and exposes
 * a combined "effective" theme that resolves {@link ThemeMode.SystemDefault}
 * to the actual system preference.
 */
export class ThemeService implements OnDestroy {
  private readonly localStorageThemeKey = 'ThemeMode';
  private readonly defaultTheme: ThemeMode = ThemeMode[localStorage.getItem(this.localStorageThemeKey) as keyof typeof ThemeMode] || ThemeMode.SystemDefault;

  private systemPreferenceMediaQuery?: MediaQueryList;
  private systemPreferenceListener?: (e: MediaQueryListEvent) => void;

  /** BehaviorSubject tracking the OS-level preferred theme (Dark or Light). */
  private systemTheme = new BehaviorSubject<ThemeMode>(this.getSystemPreferredTheme());
  /** Observable of the current OS-level preferred theme. */
  public systemTheme$ = this.systemTheme.asObservable();

  /** BehaviorSubject holding the user-selected theme (including SystemDefault). */
  themeMode = new BehaviorSubject<ThemeMode>(this.defaultTheme);
  /** Observable of the user-selected theme. */
  themeMode$ = this.themeMode.asObservable();

  /**
   * @description
   * Observable that emits the resolved effective theme mode.
   * When the selected theme is {@link ThemeMode.SystemDefault}, it resolves to the
   * current OS preference. Emits only on distinct changes.
   */
  effectiveThemeMode$ = combineLatest([this.themeMode$, this.systemTheme$]).pipe(
    map(([selected, system]) => selected === ThemeMode.SystemDefault ? system : selected),
    distinctUntilChanged()
  );

  /**
   * @description
   * Initialises the service by listening to OS-level media query changes for
   * `prefers-color-scheme` and keeping {@link systemTheme} in sync.
   */
  constructor() {
    if (typeof window !== 'undefined' && window.matchMedia) {
      this.systemPreferenceMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      this.systemTheme.next(this.systemPreferenceMediaQuery.matches ? ThemeMode.DarkMode : ThemeMode.LightMode);
      this.systemPreferenceListener = (e: MediaQueryListEvent): void => {
        this.systemTheme.next(e.matches ? ThemeMode.DarkMode : ThemeMode.LightMode);
      };

      if (this.systemPreferenceMediaQuery.addEventListener) {
        this.systemPreferenceMediaQuery.addEventListener('change', this.systemPreferenceListener);
      } else if (this.systemPreferenceMediaQuery.addListener) {
        this.systemPreferenceMediaQuery.addListener(this.systemPreferenceListener);
      }
    }
  }

  /**
   * @description Cleans up the OS media-query event listener to prevent memory leaks.
   * @returns {void}
   */
  ngOnDestroy(): void {
    if (this.systemPreferenceMediaQuery && this.systemPreferenceListener) {
      if (this.systemPreferenceMediaQuery.removeEventListener) {
        this.systemPreferenceMediaQuery.removeEventListener('change', this.systemPreferenceListener);
      } else if (this.systemPreferenceMediaQuery.removeListener) {
        this.systemPreferenceMediaQuery.removeListener(this.systemPreferenceListener);
      }
    }
  }

  /**
   * @description
   * Persists and applies a new theme selection.
   * Updates `localStorage` and emits the new value through {@link themeMode}.
   * @param {ThemeMode} theme - The {@link ThemeMode} to apply.
   * @returns {void}
   */
  public setTheme(theme: ThemeMode): void {
    localStorage.setItem(this.localStorageThemeKey, theme);
    this.themeMode.next(theme);
  }

  /**
   * @description
   * Returns the current effective theme synchronously.
   * Resolves {@link ThemeMode.SystemDefault} to the actual OS preference.
   * Prefer subscribing to {@link effectiveThemeMode$} for reactive use.
   * @returns {ThemeMode} The resolved {@link ThemeMode} — either `DarkMode` or `LightMode`.
   */
  public getEffectiveThemeMode(): ThemeMode {
    const selected = this.themeMode.value;
    return selected === ThemeMode.SystemDefault ? this.systemTheme.value : selected;
  }

  /**
   * @description
   * Reads the current OS colour-scheme preference synchronously via `window.matchMedia`.
   * Falls back to {@link ThemeMode.LightMode} in non-browser environments (SSR/tests).
   * @returns {ThemeMode} `ThemeMode.DarkMode` if the OS prefers dark, otherwise `ThemeMode.LightMode`.
   */
  public getSystemPreferredTheme(): ThemeMode {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return ThemeMode.LightMode;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? ThemeMode.DarkMode : ThemeMode.LightMode;
  }
}
