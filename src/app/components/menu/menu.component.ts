import { Component, inject, Input } from '@angular/core';
import { ThemeMode } from 'src/app/models/enums/theme-mode';
import { MenuButton, MenuOption } from 'src/app/models/interfaces/menu';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
/**
 * @description
 * Generic presentational component that renders a Material menu trigger
 * and its dropdown options.
 * Supports two visual modes:
 * - **Button mode** (`isList = false`): renders an icon button trigger.
 * - **List mode** (`isList = true`): renders a list-item trigger for use inside
 *   the sidenav.
 *
 * Callers are responsible for providing a fully configured {@link MenuButton},
 * including option active states and action callbacks.
 */
export class MenuComponent {
  /** The menu configuration including label, icon, and options. */
  @Input() menuButton!: MenuButton;
  /** When `true`, renders the menu trigger as a list item instead of an icon button. */
  @Input() isList = false;
  /**
   * Optional callback invoked after a menu option is selected.
   * Useful for closing the sidenav when a menu option is chosen.
   */
  @Input() onMenuClose: () => void = (): void => { /* no-op */ };

  public readonly themeService = inject(ThemeService);

  ThemeMode = ThemeMode;

  /**
   * @description
   * Handles a menu option click by:
   * 1. Invoking the optional {@link onMenuClose} callback (e.g. to close the sidenav).
   * 2. Calling the option's own `method`, if defined.
   * @param {MenuOption} option - The {@link MenuOption} that was clicked.
   * @returns {void}
   */
  onMenuOptionClick(option: MenuOption): void {
    if (typeof this.onMenuClose === 'function') {
      this.onMenuClose();
    }

    if (option?.method) {
      option.method(option.text);
    }
  }

  filteredOptions(): MenuOption[] {
    return this.menuButton.options?.filter(option => !option.isHidden) || [];
  }
}
