export interface ThemeModel {
    theme: string;
    btnText: string;
}

export interface ThemeTextModel {
    themeMessage: ThemeMode;
    btnText: ThemeMode;
}

export enum ThemeMode {
    DarkMode,
    LightMode,
    CustomMode
}

export const Themes = {
    [ThemeMode.DarkMode]: { theme: 'DarkMode', btnText: 'Light mode' },
    [ThemeMode.LightMode]: { theme: 'LightMode', btnText: 'Dark mode' },
    [ThemeMode.CustomMode]: { theme: 'CustomMode', btnText: 'Custom mode' }
};

export const ThemesDemo = {
    [ThemeMode.DarkMode]: { theme: 'DarkMode' },
    [ThemeMode.LightMode]: { theme: 'LightMode' },
    [ThemeMode.CustomMode]: { theme: 'CustomMode' }
};
