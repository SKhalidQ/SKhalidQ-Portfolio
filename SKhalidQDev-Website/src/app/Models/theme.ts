export class ThemeModel {
    btnText: string;
    theme: string;
    snackbar: string;
    icon: string;
}

export enum ThemeMode {
    DarkMode, LightMode
}

export const Themes = {
    [ThemeMode.DarkMode]: { btnText: 'Light Mode', theme: 'DarkTheme', snackbar: 'sbarDTheme', icon: 'brightness_3' },
    [ThemeMode.LightMode]: { btnText: 'Dark Mode', theme: 'LightTheme', snackbar: 'sbarLTheme', icon: 'wb_sunny' },
};


export interface GithubLogo {
    logoColour: string;
}

export const GithubLogo: GithubLogo = {
    logoColour: '../assets/Images/github-brands-dark.svg'
};
