import { Injectable, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ThemeMode } from 'src/app/models/enums/theme-mode';
import { ThemeService } from '../theme/theme.service';

@Injectable({
  providedIn: 'root'
})
/**
 * Service to manage the theme-color meta tag dynamically based on the application's theme.
 * It listens to theme changes from ThemeService and updates the meta tag accordingly.
 */
export class MetaThemeService {
  private readonly meta = inject(Meta);
  private readonly themeService = inject(ThemeService);

  private readonly themeColors: Record<ThemeMode.DarkMode | ThemeMode.LightMode, string> = {
    [ThemeMode.DarkMode]: '#212121',
    [ThemeMode.LightMode]: '#f5f5f5'
  };

  constructor() {
    // Initialize meta tag if it doesn't exist
    this.initializeMetaTag();

    // Set initial theme color and subscribe to theme changes
    this.themeService.effectiveThemeMode$.subscribe(effectiveTheme => {
      this.updateThemeColor(effectiveTheme);
    });
  }

  private initializeMetaTag(): void {
    // Check if theme-color meta tag exists, if not create it with a default value
    const existingTag = this.meta.getTag('name="theme-color"');
    if (!existingTag) {
      this.meta.addTag({ name: 'theme-color', content: this.themeColors[ThemeMode.LightMode] });
    }
  }

  private updateThemeColor(themeMode: ThemeMode): void {
    const color = this.getThemeColorValue(themeMode);
    this.meta.updateTag({ name: 'theme-color', content: color });
  }

  /**
   * Manually update the theme color meta tag
   * @param themeMode The theme mode to set the color for
   */
  public setThemeColor(themeMode: ThemeMode): void {
    this.updateThemeColor(themeMode);
  }

  /**
   * Get the current theme color value
   * @param themeMode The theme mode to get the color for
   * @returns The color value as a string
   */
  public getThemeColor(themeMode: ThemeMode): string {
    return this.getThemeColorValue(themeMode);
  }

  private getThemeColorValue(themeMode: ThemeMode): string {
    if (themeMode === ThemeMode.SystemDefault) {
      // This shouldn't happen as effectiveThemeMode$ should resolve SystemDefault
      const systemTheme = this.themeService.getSystemPreferredTheme();
      return systemTheme === ThemeMode.DarkMode ? this.themeColors[ThemeMode.DarkMode] : this.themeColors[ThemeMode.LightMode];
    }

    if (themeMode === ThemeMode.DarkMode) {
      return this.themeColors[ThemeMode.DarkMode];
    }

    return this.themeColors[ThemeMode.LightMode];
  }
}
