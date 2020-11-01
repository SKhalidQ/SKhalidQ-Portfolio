export class ThemeMode {
    btnText: string;
    theme: string;
    snackbar: string;
    icon: string;
}

export const Themes: ThemeMode[] = [
    {
        btnText: "Light Mode",
        theme: "DarkTheme",
        snackbar: "sbarDTheme",
        icon: "brightness_3",
    },
    {
        btnText: "Dark Mode",
        theme: "LightTheme",
        snackbar: "sbarLTheme",
        icon: "wb_sunny",
    }
];


// export interface buttons {
//     btnText: string;
//     theme: string;
//     snackbar: string;
//     icon: string;
// }

// enum ThemeMode {
//     DarkMode, LightMode
// }

// export interface Dictionary<buttons> {
//     Theme: ThemeMode;
// }

// export const Themes: Dictionary<buttons> = [
//     {[ThemeMode.DarkMode]: { btnText: 'string', theme: 'string', snackbar: 'string', icon: 'string' }},
//     {[ThemeMode.LightMode]: { btnText: 'string', theme: 'string', snackbar: 'string', icon: 'string' }},
// ];



// export interface Dictionary<vutton> {
//     Theme: vutton;
// }

// export class vutton {
//     btnText: string;
//     theme: string;
//     snackbar: string;
//     icon: string;
// }

// export enum Theme {
//     DarkMode, LightMode
// }

// export const Themes: Dictionary<vutton> = [
//     { [Theme.LightMode]: { btnText: 'string', theme: 'string', snackbar: 'string', icon: 'string' } }
// ];









export interface GithubLogo {
    logoColour: string;
}

export const GithubLogo: GithubLogo = {
    logoColour: "../assets/Images/github-brands-dark.svg"
}
