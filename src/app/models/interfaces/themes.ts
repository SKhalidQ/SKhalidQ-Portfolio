import { ThemeMode } from '../enums/theme-mode';

export interface ThemeModel {
  theme: string;
  btnText: string;
}

export interface ThemeTextModel {
  themeMessage: ThemeMode;
  btnText: ThemeMode;
}
