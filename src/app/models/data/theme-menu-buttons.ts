import { ThemeMode } from '../enums/theme-mode';
import { MenuButton, MenuOption } from '../interfaces/menu';

export const ThemeMenuOptions: MenuOption[] = [
  { key: ThemeMode.LightMode, text: `themeMenu.options.${ThemeMode[ThemeMode.LightMode]}`, icon: 'light_mode', iconType: 'icon', method: (): void => { /* no-op */ } },
  { key: ThemeMode.DarkMode, text: `themeMenu.options.${ThemeMode[ThemeMode.DarkMode]}`, icon: 'dark_mode', iconType: 'icon', method: (): void => { /* no-op */ } },
  { key: ThemeMode.SystemDefault, text: `themeMenu.options.${ThemeMode[ThemeMode.SystemDefault]}`, icon: 'build', iconType: 'icon', method: (): void => { /* no-op */ }, isActive: true }
];

export const ThemeMenuButton: MenuButton = {
  text: 'themeMenu.title',
  icon: 'dark_mode',
  menuFor: 'themesMenu',
  options: ThemeMenuOptions
};
