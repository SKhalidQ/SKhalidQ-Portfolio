import { ThemeMode } from "../enums/ThemeMode";

export interface ThemeModel {
  theme: string;
  btnText: string;
}

export interface ThemeTextModel {
  themeMessage: ThemeMode;
  btnText: ThemeMode;
}
