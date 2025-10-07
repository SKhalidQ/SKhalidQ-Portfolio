import { Component, inject, Input, OnDestroy } from '@angular/core';
import { ThemeMode } from 'src/app/models/enums/ThemeMode';
import { MenuButton } from 'src/app/models/interfaces/Menu';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() menuButton!: MenuButton;
  @Input() isList: boolean = false;
  @Input() onMenuClose: () => void = (): void => {};

  public readonly themeService = inject(ThemeService);

  ThemeMode = ThemeMode;

  constructor() {}

  onMenuOptionClick(option: any, event?: MouseEvent): void {
    if (typeof this.onMenuClose === 'function') {
      this.onMenuClose();
    }

    if (option?.method) {
      option.method(option.text);
    }
  }
}
