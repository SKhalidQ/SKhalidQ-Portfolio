import { LanguageStrings } from './en-gb';

export const caES: LanguageStrings = {
  navigationButtons: {
    home: 'Inici',
    curriculum: 'Currículum',
    projects: 'Projectes',
    about: 'Sobre'
  },
  languageMenu: {
    title: 'Idioma',
    options: {
      enGB: 'Anglès',
      esES: 'Castellà',
      caES: 'Català',
      urPK: 'Urdú'
    }
  },
  themeMenu: {
    title: 'Tema',
    options: {
      LightMode: 'Mode Clar',
      DarkMode: 'Mode Fosc',
      SystemDefault: 'Predeterminat pel Sistema'
    }
  },
  pages: {
    Home: 'Inici',
    Curriculum: 'Currículum',
    Projects: 'Projectes',
    About: 'Sobre'
  },
  snackbar: {
    dismiss: 'Descartar',
    themeChanged: 'Tema canviat a {0}',
    languageChanged: 'Idioma canviat a {0}',
    copiedToClipboard: 'Copiat al portapapers',
    connectionRestored: 'Connexió restaurada'
  },
  projectCard: {
    repoTooltip: 'Enllaç al repositori de GitHub',
    privateRepoTooltip: 'Disponible a petició',
    websiteTooltip: 'Veure pàgina',
    unavailableWebsiteTooltip: 'Pàgina no disponible'
  },
  projectsPage: {
    filter: 'Filtrar per Tipus de Projecte',
    noProjectsError: 'Sembla que hi ha un problema a l\'hora d\'obtenir totes les dades.',
    visitSite: 'Visitar Pàgina',

    ProjectTypeFilter: {
      All: 'Tots',
      WorkProject: 'Projectes del Treball',
      PersonalProject: 'Projectes Personals',
      UniversityProject: 'Projectes Universitaris'
    }
  },
  errorPage: {
    forbidden: 'No tens permís per accedir a aquesta pàgina.',
    notFound: 'Sembla que la pàgina que buscaves no existeix o l\'enllaç està trencat.',
    genericError: 'Alguna cosa ha anat malament al nostre costat. Si us plau, torna-ho a intentar més tard.'
  },
  aboutPage: {
    changelog: 'Registre de canvis',
    checkUpdates: 'Comprovar Actualitzacions',
    checkUpdatesDialog: {
      newUpdate: {
        title: 'Nova Actualització!',
        message: 'Hi ha nou contingut disponible en aquesta pàgina. Vols actualitzar?',
        action: 'Actualitzar'
      },
      disabledUpdate: {
        title: 'Actualització Desactivada',
        message: 'Les actualitzacions automàtiques no estan habilitades en aquest entorn.',
        action: 'Tancar'
      },
      noNewUpdate: {
        title: 'Cap Actualització Disponible',
        message: 'Ja estàs executant la versió més recent d\'aquesta aplicació.',
        action: 'Tancar'
      },
      updateError: {
        title: 'Error en Comprovar Actualitzacions',
        message: 'No s\'ha pogut comprovar si hi ha actualitzacions en aquest moment. Si us plau, torna-ho a intentar més tard.',
        action: 'Tancar'
      }
    }
  },
  projects: {
    mediaPlay: {
      title: 'Media Play (Alpha)',
      subtitle: 'Projecte Personal',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolores vitae, suscipit autem sunt sint provident architecto maiores, possimus ea corrupti unde dignissimos ipsa, fugiat quod? Corporis doloremque culpa alias ea sint laboriosam. Eligendi ullam consectetur fugiat atque unde eveniet voluptates!'
    },
    angularI18n: {
      title: 'Angular Library - i18n',
      subtitle: 'Projecte Personal',
      description: 'Una biblioteca de i18n per a Angular amb claus de traducció segures per tipus i canvi d\'idioma reactiu perquè la IU s\'actualitzi instantàniament a tota l\'aplicació. Suporta interpolació i pluralització, persistència d\'idioma, traduccions de suport i càrrega diferida opcional de paquets d\'idioma per a paquets inicials més petits.'
    },
    fileExplorer: {
      title: 'File Explorer (Alpha)',
      subtitle: 'Projecte Personal',
      description:'Un explorador d\'arxius modern que s\'utilitza per administrar les meves unitats de xarxa de forma remota. Em permet afegir, editar o eliminar arxius, actualitzar l\'ubicació i fins i tot compartir contingut. Client creat amb Angular i backend creat amb ASP.NET Core executant-se en un contenidor Docker.'
    },
    myList: {
      title: 'MyList (Beta)',
      subtitle: 'Projecte Personal',
      description: 'Un web que permet als usuaris seguir les sèries i pel·lícules que estan veient. Poden afegir una sèrie i actualitzar nombre i el minut en que van deixar un episodi per última vegada. el projecte està desenvolupat amb Angular i ASP.NET Core.'
    },
    adminCommands: {
      title: 'Comands Administratius (Deprecated)',
      subtitle: 'Projecte Personal',
      description: 'Un script en Batch amb una col·lecció de comands per a facilitar el seu accés. Comands com habilitar el compte d\'administrador local per extreure tota la informació relacionada amb el dispositiu i altres funcions.'
    },
    bbisa: {
      title: 'Beer Bottle Inventory System App',
      subtitle: 'Projecte de Fi d\'Any',
      description: 'Projecte desenvolupat amb Angular i ASP.NET Core. Permet als usuaris rastrejar un inventari d\'ampolles de cervesa afegint els seus detalls. L\'usuari pot registrar comandes i historial de vendes que impacten la quantitat d\'estoc d\'un producte.'
    },
    distributedSystems: {
      title: 'API i Desenvolupament de Client',
      subtitle: 'Programació de Sistemes Distribuïts - Mòdul de 3r any',
      description: 'Projecte ASP.NET Core Web API amb endpoints per a diverses funcions criptogràfiques mitjançant xifrat simètric i asimètric. Usa Auth basada en Claims i Entity Framework Core.'
    },
    jumble: {
      title: 'Jumble!',
      subtitle: 'Desenvolupament Mòbil i Dispositius - Mòdul de 3r any',
      description: 'Joc d\'aplicació mòbil creat amb Android Studio que permet a l\'usuari completar una llista d\'imatges disponibles a Internet. El jugador ha d\'acabar un trencaclosques amb pocs moviments i pot guardar la seva puntuació per compartir-la amb altres jugadors.'
    },
    dataMining: {
      title: 'Anàlisi de Dades Metges',
      subtitle: 'Data Mining i Sistemes de Decisions - Mòdul de 3r any',
      description: 'Aquest projecte de data mining analitza un conjunt de dades d\'historial mèdic utilitzant diferents algoritmes per predir com els pacients estan en major o menor risc segons les seves malalties. Desenvolupat amb Python i Jupyter Notebook.'
    },
    networking: {
      title: 'Networking i Disseny d\'IU',
      subtitle: 'Networking i Disseny d\'Interfície d\'Usuari - Mòdul de 2n any',
      description: 'Un client desenvolupat amb C# i WPF, que envia sol·licituds al servidor creat en WPF amb diversos protocols HTTP, inclosos \'Whois\' i HTTP 0.9 a 1.1.'
    },
    webTech: {
      title: 'Disseny d\'Interfície per Localitzador de Web',
      subtitle: 'Sistemes Informàtics i Tecnologies Web - Mòdul de 2n any',
      description: 'Una pàgina web construïda fent servir HTML, CSS i PHP que permet rastrejar l\'ubicació d\'un estudiant o personal emmagatzemant totes les dades en una base de dades SQL.'
    },
    agentChatBot: {
      title: 'Agent Chatbot',
      subtitle: 'Intel·ligència Artificial - Mòdul de 2n any',
      description: 'Un simple agent de chatbot creat amb SWI Prolog que respon amb una recomanació utilitzant una recerca recursiva basada en l\'imput. L\'agent respondrà amb una acció a realitzar basant-se primer a la millor frase utilitzant regles simples.'
    }
  },
  homePage: {
    title: 'Benvingut al meu Portafoli!',
    cvHighlight: {
      description: 'Explora la meva trajectòria professional, habilitats, experiències i interessos al meu CV.',
      navigationButton: {
        text: 'Veure Curriculum'
      }
    },
    projectsHighlight: {
      description: 'Descobreix els meus projectes i les tecnologies que he utilitzat.',
      navigationButton: {
        text: 'Veure Projectes'
      }
    }
  },
  curriculumPage: {
    copyToClipboard: 'Copiar al portapapers',
    header: {
      name: 'Sad Khalid Qayyum',
      title: 'Enginyer de Programari - Full Stack Developer'
    },
    profile: {
      title: 'Perfil',
      description: 'Recent graduat en Ciències de la Computació amb una Segona Classe (Divisió 1), buscant una feina en la indústria del desenvolupament de programari. Preparat per utilitzar les meves habilitats que he adquirit durant la meva educació i en el meu temps lliure. Emocionat per aprendre més i provar noves tecnologies.'
    },
    employmentHistory: {
      title: 'Historial Laboral',
      jobs: {
        weatherford: {
          title: 'Enginyer Informàtic - Weatherford Ltd (Reeves Wireline Technologies)',
          description: 'Treballo a la divisió de Wireline de Weatherford, desenvolupant programari per a l\'adquisició de dades en el fons del pou, gestió de fitxers i visualització de registres en temps real en projectes CAPEX i OPEX en suport a les operacions petrolieres.',
          dates: 'Dec 2021 - Present'
        },
        greenwood: {
          title: 'Tècnic de Suport d\'IT  - Greenwood Academies Trust',
          description: 'Formar part d\'un departament de suport d\'IT d\'alt ritme. Proporcionar suport tècnic als membres del personal de l\'acadèmia i realitzar diverses tasques inclòs el manteniment dels servidors, l\'administració de dispositius i la resolució de problemes.',
          dates: 'Gen 2020 - Nov 2021'
        },
        homeFundraising: {
          title: 'Recaptador de Fons Porta a Porta  - Home Fundraising',
          description: 'Difondre consciència sobre com l\'organització està ajudant les persones i com els altres poden ajudar.',
          dates: 'Feb 2017'
        }
      }
    },
    educationHistory: {
      title: 'Educació',
      institutions: {
        university: {
          title: 'BSc (Hons) Computer Science (2:1) - University of Hull',
          description: 'Vaig estudiar una àmplia gamma de temes que inclouen: programació de sistemes distribuïts, desenvolupament d\'aplicacions mòbils, data mining i sistemes de decisió i, tecnologies web. Llista completa de mòduls disponible a petició.',
        },
        academy: {
          title: 'Nottingham Academy',
          description: 'A-Level Castellà i BTEC Nivell 3 Diploma en Negocis,\n5 GCSEs Incloent Matemàtiques i Anglès, 3 BTECs Incloent Ciències'
        }
      }
    },
    technicalSkills: {
      title: 'Habilitats Tècniques'
    },
    nonTechnicalSkills: {
      title: 'Habilitats No Tècniques',
      skills: {
        teamwork: {
          title: 'Treball en equip',
          description: 'Vaig treballar en un entorn molt ocupat a Greenwood Academies Trust com a tècnic d\'IT, fet que va implicar col·laborar amb l\'equip per resoldre situacions crítiques. Vaig realitzar múltiples projectes de treball en grup durant la meva educació i vaig superar desafiaments treballant en equip per assolir els objectius.'
        },
        communication: {
          title: 'Comunicació',
          description: 'Vaig proporcionar un servei de suport amigable i útil, vaig comunicar amb els meus companys durant la meva feina com a tècnic d\'IT. Vaig ajudar a crear consciència com una organització benèfica per recaptar fons. Vaig presentar informació tècnica de forma clara i concisa per a presentacions universitàries. Vaig participar i vaig actuar amb èxit en diverses obres de teatre a la universitat.'
        },
        organisation: {
          title: 'Organització',
          description: 'Vaig prioritzar els casos de suport d\'IT reorganitzant els casos segons la gravetat del problema i vaig proporcionar suport el més ràpid possible. Vaig lliurar innombrables projectes durant la universitat i l\'institut per a dates límits específiques administrant el temps i prioritzant funcions importants.'
        }
      }
    },
    achievements: {
      title: 'Assoliments',
      list: {
        azureFundamentals: {
          title: 'Microsoft Certified: Azure Fundamentals',
          year: 'Nov 2024',
          description: 'Vaig completar la certificació AZ-900 que demostra un coneixement bàsic dels serveis al núvol i com es proporcionen aquests serveis amb Microsoft Azure.'
        }
      }
    },
    hobbies: {
      title: 'Aficions',
      hobbies: {
        movies: 'Pel·lícules i Sèries',
        gaming: 'Videojocs',
        music: 'Música',
        videoEditing: 'Edició de Vídeo',
        code: 'Programació',
        fitness: 'Fitness'
      }
    }
  }
};
