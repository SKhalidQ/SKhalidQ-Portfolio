import { Pipe, PipeTransform } from '@angular/core';
import { ThemeMode } from 'src/app/models/enums/theme-mode';
import { NavigationButton } from 'src/app/models/interfaces/navigation-button';

@Pipe({
  name: 'socialButtonLogo'
})
/**
 * @description
 * Pure pipe that swaps the icon path of social media navigation buttons
 * to match the current effective theme.
 * Dark mode buttons use `-light` variants (light icon on dark background)
 * and light mode buttons use `-dark` variants.
 */
export class SocialButtonLogoPipe implements PipeTransform {

  /**
   * @description Returns a new array of buttons with icon paths adjusted for the active theme.
   * @param {NavigationButton[] | null | undefined} buttons - The source array of {@link NavigationButton} objects.
   * @param {ThemeMode | null | undefined} effectiveTheme - The current resolved theme from `effectiveThemeMode$`.
   * @returns {NavigationButton[]} A mapped array of buttons with corrected icon paths,
   *   or the original array if inputs are null/undefined.
   */
  transform(buttons: NavigationButton[] | null | undefined, effectiveTheme: ThemeMode | null | undefined): NavigationButton[] {
    if (!buttons || !effectiveTheme){
      return buttons || [];
    }

    const isDark = effectiveTheme === ThemeMode.DarkMode;
    return buttons.map(btn => {
      const replaced = isDark ? btn.icon.replace('-dark', '-light') : btn.icon.replace('-light', '-dark');

      if (replaced === btn.icon) {
        return btn; // no change
      }

      return { ...btn, icon: replaced };
    });
  }

}
