export class ThemeModel {
    theme: string;
    btnText: string;
}

export class ThemeTextModel {
    themeMessage: ThemeMode;
    btnText: ThemeMode;
}

export enum ThemeMode {
    DarkMode, LightMode
}

export const Themes = {
    [ThemeMode.DarkMode]: { theme: 'DarkMode', btnText: 'Light mode' },
    [ThemeMode.LightMode]: { theme: 'LightMode', btnText: 'Dark mode' }
};

export const ThemesDemo = {
    [ThemeMode.DarkMode]: { theme: 'DarkMode' },
    [ThemeMode.LightMode]: { theme: 'LightMode' }
};
