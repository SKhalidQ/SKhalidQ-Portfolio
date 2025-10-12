import { Component, inject, Input } from '@angular/core';
import { ThemeMode } from 'src/app/models/enums/theme-mode';
import { MenuButton, MenuOption } from 'src/app/models/interfaces/menu';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() menuButton!: MenuButton;
  @Input() isList = false;
  @Input() onMenuClose: () => void = (): void => { /* no-op */ };

  public readonly themeService = inject(ThemeService);

  ThemeMode = ThemeMode;

  onMenuOptionClick(option: MenuOption): void {
    if (typeof this.onMenuClose === 'function') {
      this.onMenuClose();
    }

    if (option?.method) {
      option.method(option.text);
    }
  }
}
