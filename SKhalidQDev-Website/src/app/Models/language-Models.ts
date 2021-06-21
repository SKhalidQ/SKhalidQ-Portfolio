interface Languages {
    lang: string;
    flag: string;
    activeLang: boolean;
    disabled: boolean;
    tooltip: string;
}

interface Buttons {
    Language: string;
    About: string;
    Curriculum: string;
    Projects: string;
    Home: string;
    Themes: string;
    ProjGoBtn: string;
    LightTheme: string;
    DarkTheme: string;
    Languages: string;
    English: string;
    Spanish: string;
    Catalan: string;
}

export const LanguagesList: Languages[] = [
    {
        lang: "English",
        flag: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg",
        activeLang: true,
        disabled: false,
        tooltip: null,
    },
    {
        lang: "Spanish",
        flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
        activeLang: false,
        disabled: true,
        tooltip: "Coming soon",
    },
    {
        lang: "Catalan",
        flag: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Catalonia.svg",
        activeLang: false,
        disabled: true,
        tooltip: "Coming soon",
    },
]

export const ButtonText: Buttons[] = [
    {
        Language: "English",
        About: "About",
        Curriculum: "Curriculum", //Para la pagina hacer ButtonText.Curriculum + " Vitae"
        Projects: "Projects",
        Home: "Home",
        ProjGoBtn: "Go",
        Themes: "Themes",
        LightTheme: "Light Theme",
        DarkTheme: "Dark Theme",
        Languages: "Languages",
        English: "English",
        Spanish: "Spanish",
        Catalan: "Catalan",
    },
    {
        Language: "Spanish",
        About: "Acerca de",
        Curriculum: "Curriculum",
        Projects: "Proyectos",
        Home: "Inicio",
        ProjGoBtn: "Ir",
        Themes: "Temas",
        LightTheme: "Tema claro",
        DarkTheme: "Tema oscuro",
        Languages: "Idiomas",
        English: "Inglés",
        Spanish: "Castellano",
        Catalan: "Catalán",
    },
    {
        Language: "Catalan",
        About: "Sobre",
        Curriculum: "Curriculum",
        Projects: "Projectes",
        Home: "Inici",
        ProjGoBtn: "Anar",
        Themes: "Temes",
        LightTheme: "Tema clar",
        DarkTheme: "Tema fosc",
        Languages: "Idiomes",
        English: "Angles",
        Spanish: "Castella",
        Catalan: "Catala",
    },
];