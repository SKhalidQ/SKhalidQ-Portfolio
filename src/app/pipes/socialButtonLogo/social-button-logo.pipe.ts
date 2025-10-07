import { Pipe, PipeTransform } from '@angular/core';
import { ThemeMode } from 'src/app/models/enums/ThemeMode';
import { NavigationButton } from 'src/app/models/interfaces/NavigationButton';

@Pipe({
  name: 'socialButtonLogo'
})
export class SocialButtonLogoPipe implements PipeTransform {

  transform(buttons: NavigationButton[] | null | undefined, effectiveTheme: ThemeMode | null | undefined): NavigationButton[] {
    if (!buttons || !effectiveTheme) return buttons || [];
    const isDark = effectiveTheme === ThemeMode.DarkMode;
    return buttons.map(btn => {
      const replaced = isDark ? btn.icon.replace('-dark', '-light') : btn.icon.replace('-light', '-dark');
      if (replaced === btn.icon) return btn; // no change
      return { ...btn, icon: replaced };
    });
  }

}
