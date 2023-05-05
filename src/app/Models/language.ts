export interface Languages {
    name: string;
    flag: string;
    activeLang: boolean;
    disabled: boolean;
    tooltip: string;
}

export interface Language {
    name: string;
    flag: string;
    activeLang: boolean;
    disabled: boolean;
    tooltip: string;
}

export interface LanguagesModel {
    English: Language;
    Castellano: Language;
    Catala: Language;
    Urdu: Language;
}

interface Buttons {
    Language: string;
    About: string;
    Curriculum: string;
    Projects: string;
    Home: string;
    Themes: string;
    ProjGoBtn: string;
    LightMode: string;
    DarkMode: string;
    Languages: string;
    English: string;
    Spanish: string;
    Catalan: string;
}

export const LanguagesList: Languages[] = [
    {
        name: 'English',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg',
        activeLang: true,
        disabled: false,
        tooltip: ''
    },
    {
        name: 'Castellano',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg',
        activeLang: false,
        disabled: false,
        tooltip: '',
    },
    {
        name: 'Català',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Catalonia.svg',
        activeLang: false,
        disabled: false,
        tooltip: '',
    },
    {
        name: 'اردو',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg',
        activeLang: false,
        disabled: true,
        tooltip: 'Coming soon',
    },
];

export const LanguageList: LanguagesModel = {
    English: {
        name: 'English',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg',
        activeLang: true,
        disabled: false,
        tooltip: ''
    },
    Castellano: {
        name: 'Castellano',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg',
        activeLang: false,
        disabled: false,
        tooltip: '',
    },
    Catala: {
        name: 'Català',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Catalonia.svg',
        activeLang: false,
        disabled: false,
        tooltip: '',
    },
    Urdu: {
        name: 'اردو',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg',
        activeLang: false,
        disabled: true,
        tooltip: 'Coming soon',
    }
}

export const ButtonText: Buttons[] = [
    {
        Language: 'English',
        About: 'About',
        Curriculum: 'Curriculum', // Para la pagina hacer ButtonText.Curriculum + ' Vitae'
        Projects: 'Projects',
        Home: 'Home',
        ProjGoBtn: 'Go',
        Themes: 'Themes',
        LightMode: 'Light Theme',
        DarkMode: 'Dark Theme',
        Languages: 'Languages',
        English: 'English',
        Spanish: 'Spanish',
        Catalan: 'Catalan',
    },
    {
        Language: 'Spanish',
        About: 'Acerca de',
        Curriculum: 'Curriculum',
        Projects: 'Proyectos',
        Home: 'Inicio',
        ProjGoBtn: 'Ir',
        Themes: 'Temas',
        LightMode: 'Tema claro',
        DarkMode: 'Tema oscuro',
        Languages: 'Idiomas',
        English: 'Inglés',
        Spanish: 'Castellano',
        Catalan: 'Catalán',
    },
    {
        Language: 'Catalan',
        About: 'Sobre',
        Curriculum: 'Curriculum',
        Projects: 'Projectes',
        Home: 'Inici',
        ProjGoBtn: 'Anar',
        Themes: 'Temes',
        LightMode: 'Tema clar',
        DarkMode: 'Tema fosc',
        Languages: 'Idiomes',
        English: 'Angles',
        Spanish: 'Castella',
        Catalan: 'Catala',
    },
];
