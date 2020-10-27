export class ThemeMode {
    btnText: string;
    theme: string;
    snackbar: string;
    icon: string;
}

export interface GithubLogo {
    logoColour: string;
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

export const GithubLogo: GithubLogo = {
    logoColour: "../assets/Images/github-brands-dark.svg"
}
