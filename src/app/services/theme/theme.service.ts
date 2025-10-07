import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, combineLatest, distinctUntilChanged, map } from 'rxjs';
import { ThemeMode } from 'src/app/models/enums/ThemeMode';

@Injectable({
  providedIn: 'root'
})
export class ThemeService implements OnDestroy {
  private readonly localStorageThemeKey = 'ThemeMode';
  private readonly defaultTheme: ThemeMode = ThemeMode[localStorage.getItem(this.localStorageThemeKey) as keyof typeof ThemeMode] || ThemeMode.SystemDefault;

  private systemPreferenceMediaQuery?: MediaQueryList;
  private systemPreferenceListener?: (e: MediaQueryListEvent) => void;

  private systemTheme = new BehaviorSubject<ThemeMode>(this.getSystemPreferredTheme());
  public systemTheme$ = this.systemTheme.asObservable();

  themeMode = new BehaviorSubject<ThemeMode>(this.defaultTheme);
  themeMode$ = this.themeMode.asObservable();

  effectiveThemeMode$ = combineLatest([this.themeMode$, this.systemTheme$]).pipe(
    map(([selected, system]) => selected === ThemeMode.SystemDefault ? system : selected),
    distinctUntilChanged()
  );

  constructor() {
    if (typeof window !== 'undefined' && window.matchMedia) {
      this.systemPreferenceMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      this.systemTheme.next(this.systemPreferenceMediaQuery.matches ? ThemeMode.DarkMode : ThemeMode.LightMode);
      this.systemPreferenceListener = (e: MediaQueryListEvent) => {
        this.systemTheme.next(e.matches ? ThemeMode.DarkMode : ThemeMode.LightMode);
      };
      if (this.systemPreferenceMediaQuery.addEventListener) {
        this.systemPreferenceMediaQuery.addEventListener('change', this.systemPreferenceListener);
      } else if (this.systemPreferenceMediaQuery.addListener) {
        this.systemPreferenceMediaQuery.addListener(this.systemPreferenceListener);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.systemPreferenceMediaQuery && this.systemPreferenceListener) {
      if (this.systemPreferenceMediaQuery.removeEventListener) {
        this.systemPreferenceMediaQuery.removeEventListener('change', this.systemPreferenceListener);
      } else if (this.systemPreferenceMediaQuery.removeListener) {
        this.systemPreferenceMediaQuery.removeListener(this.systemPreferenceListener);
      }
    }
  }

  public setTheme(theme: ThemeMode): void {
    localStorage.setItem(this.localStorageThemeKey, theme);
    this.themeMode.next(theme);
  }

  public getSystemPreferredTheme(): ThemeMode {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return ThemeMode.LightMode;
    }
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? ThemeMode.DarkMode : ThemeMode.LightMode;
  }
}
