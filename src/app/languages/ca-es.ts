import { LanguageStrings } from './en-gb';

export const caES: LanguageStrings = {
  aboutPage: {
    changelog: 'Registre de canvis',
    checkUpdates: 'Comprovar Actualitzacions',
    checkUpdatesDialog: {
      action : {
        cancel: 'Cancel·lar',
        close: 'Tancar',
        update: 'Actualitzar'
      },
      disabledUpdate: {
        message: 'Les actualitzacions automàtiques no estan habilitades en aquest entorn.',
        title: 'Actualització Desactivada'
      },
      lostConnection: {
        message: 'Sembla que has perdut la connexió. Algunes funcions podrien no estar accessibles.',
        title: 'Sense Connexió'
      },
      newUpdate: {
        message: 'Hi ha nou contingut disponible en aquesta pàgina. Vols actualitzar?',
        title: 'Nova Actualització!'
      },
      noNewUpdate: {
        message: 'Ja estàs executant la versió més recent d\'aquesta aplicació.',
        title: 'Cap Actualització Disponible'
      },
      updateError: {
        message: 'No s\'ha pogut comprovar si hi ha actualitzacions en aquest moment. Si us plau, torna-ho a intentar més tard.',
        title: 'Error en Comprovar Actualitzacions'
      }
    }
  },
  curriculumPage: {
    achievements: {
      list: {
        azureFundamentals: {
          description: 'Vaig completar la certificació AZ-900 que demostra un coneixement bàsic dels serveis al núvol i com es proporcionen aquests serveis amb Microsoft Azure.',
          title: 'Microsoft Certified: Azure Fundamentals',
          year: 'Nov 2024'
        }
      },
      title: 'Assoliments'
    },
    copyToClipboard: 'Copiar al portapapers',
    educationHistory: {
      institutions: {
        academy: {
          dates: 'Set 2012 - Jun 2016',
          description: 'A-Level Castellà i BTEC Nivell 3 Diploma en Negocis,\n5 GCSEs Incloent Matemàtiques i Anglès, 3 BTECs Incloent Ciències',
          title: 'Nottingham Academy'
        },
        university: {
          dates: 'Set 2017 - Jun 2020',
          description: 'Vaig estudiar una àmplia gamma de temes que inclouen: programació de sistemes distribuïts, desenvolupament d\'aplicacions mòbils, data mining i sistemes de decisió i, tecnologies web. Llista completa de mòduls disponible a petició.',
          title: 'BSc (Hons) Computer Science (2:1) - University of Hull'
        }
      },
      title: 'Educació'
    },
    employmentHistory: {
      jobs: {
        greenwood: {
          dates: 'Gen 2020 - Nov 2021',
          description: 'Formar part d\'un departament de suport d\'IT d\'alt ritme. Proporcionar suport tècnic als membres del personal de l\'acadèmia i realitzar diverses tasques inclòs el manteniment dels servidors, l\'administració de dispositius i la resolució de problemes.',
          title: 'Tècnic de Suport d\'IT  - Greenwood Academies Trust'
        },
        homeFundraising: {
          dates: 'Feb 2017',
          description: 'Difondre consciència sobre com l\'organització està ajudant les persones i com els altres poden ajudar.',
          title: 'Recaptador de Fons Porta a Porta  - Home Fundraising'
        },
        weatherford: {
          dates: 'Des 2021 - Mar 2026',
          description: 'Vaig treballar a la divisió de Wireline de Weatherford, desenvolupant programari per a l\'adquisició de dades en el fons del pou, gestió de fitxers i visualització de registres en temps real en projectes CAPEX i OPEX en suport a les operacions petrolieres.',
          title: 'Enginyer Informàtic - Weatherford Ltd (Reeves Wireline Technologies)'
        }
      },
      title: 'Historial Laboral'
    },
    header: {
      name: 'Sad Khalid Qayyum',
      title: 'Enginyer de Programari - Full Stack Developer'
    },
    hobbies: {
      hobbies: {
        badminton: 'Badminton',
        code: 'Programació',
        designing: 'Disseny d\'Interfícies',
        fitness: 'Fitness',
        gaming: 'Gaming',
        videoEditing: 'Edició de Vídeo'
      },
      title: 'Aficions'
    },
    languages: {
      catalan: 'Català (Natiu)',
      english: 'Anglès (Professional)',
      punjabi: 'Panjabi (Natiu)',
      spanish: 'Castellà (Natiu)',
      title: 'Idiomes',
      urdu: 'Urdu (Natiu)'
    },
    profile: {
      description: 'Desenvolupador Full Stack amb quatre anys d\'experiència en la construcció i manteniment d\'aplicacions web i infraestructura en el cloud en equips àgils i multifuncionals. Dedicat a lliurar programari escalable i d\'alta qualitat, amb una sòlida base en desenvolupament web i una passió per l\'aprenentatge continu.',
      title: 'Perfil'
    },
    technicalSkills: {
      sections: {
        backendDevelopment: {
          skills: {
            dotNet: {
              description: 'Experiència professional extensa construint APIs, aplicacions UI i eines de consola, aplicant principis OOP, injecció de dependències i patrons de disseny comuns, juntament amb l\'escriptura de proves automatitzades utilitzant NUnit.',
              title: 'C#/.Net, ASP.NET Core, Entity Framework'
            },
            sql: {
              description: 'Experiència sòlida dissenyant models relacionals, escrivint consultes i treballant amb bases de dades de producció.',
              title: 'SQL'
            }
          },
          title: 'Desenvolupador Backend'
        },
        cloudAndInfrastructure: {
          skills: {
            docker: {
              description: 'Experiència desplegant i mantenint aplicacions en contenidors, incloent tant projectes personalitzats com imatges disponibles públicament.',
              title: 'Docker/Kubernetes'
            },
            msAzure: {
              description: 'Experiència mantenint la infraestructura al cloud per a aplicacions de producció, incloent la creació i actualització de serveis, la supervisió d\'aplicacions allotjades i la provisió de recursos al cloud amb terraform utilitzant infraestructura com a servei.',
              title: 'Microsoft Azure'
            }
          },
          title: 'Cloud i Infraestructura'
        },
        devOpsAndTooling: {
          skills: {
            devOpsAndSourceControl: {
              description: 'Experiència treballant amb Azure DevOps per a taulers, backlogs, planificació de sprints i pipelines CI/CD; amb GitHub per a projectes personals amb automatització de fluxos de treball i llançaments; i amb Git a través de ambdues plataformes per a la gestió de repositoris, branques, pull requests i revisions de codi.',
              title: 'Azure DevOps, Git, GitHub'
            },
            aiAndAutomation: {
              description: 'Experiència professional i personal a través de treball i projectes personales; utilitzant GitHub Copilot i altres LLMs (Claude, GPT) para acelerar prototipado, generar pruebas/configuración y automatizar tareas rutinarias, con revisión manual y propiedad final.',
              title: 'IA y Automatización'
            }
          },
          title: 'DevOps i Eines'
        },
        frontendDevelopment: {
          skills: {
            angular: {
              description: 'Experiència personal en diversos projectes personals; familiaritzat amb l\'arquitectura de components, rutes, serveis, guards i més.',
              title: 'Angular'
            },
            react: {
              description: 'Experiència professional construint interfícies d\'usuari basades en components, escrivint proves unitàries i desenvolupant una biblioteca de visualització reutilitzable.',
              title: 'React'
            },
            others: {
              description: 'Utilitzat en diferents frameworks per construir eines d\'interfície d\'usuari i aplicacions interactives.',
              title: 'Javascript/TypeScript, CSS/SCSS'
            }
          },
          title: 'Desenvolupador Frontend'
        }
      },
      title: 'Habilitats Tècniques'
    }
  },
  environments: {
    Alpha: 'Alfa',
    Beta: 'Beta'
  },
  errorPage: {
    forbidden: 'No tens permís per accedir a aquesta pàgina.',
    notFound: 'Sembla que la pàgina que buscaves no existeix o l\'enllaç està trencat.',
    genericError: 'Alguna cosa ha anat malament al nostre costat. Si us plau, torna-ho a intentar més tard.'
  },
  homePage: {
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
    },
    title: 'Benvingut al meu Portafoli!'
  },
  languageMenu: {
    options: {
      caES: 'Català',
      enGB: 'Anglès',
      esES: 'Castellà',
      paPK: 'Panjabi',
      urPK: 'Urdú'
    },
    title: 'Idioma'
  },
  navigationButtons: {
    about: 'Sobre',
    curriculum: 'Currículum',
    home: 'Inici',
    projects: 'Projectes'
  },
  pages: {
    About: 'Sobre',
    Curriculum: 'Currículum Vitae',
    Home: 'Inici',
    Projects: 'Projectes'
  },
  portfolio: 'Portafoli',
  projects: {
    adminCommands: {
      description: 'Un script en Batch amb una col·lecció de comands per a facilitar el seu accés. Comands com habilitar el compte d\'administrador local per extreure tota la informació relacionada amb el dispositiu i altres funcions.',
      subtitle: 'Projecte Personal',
      title: 'Comands Administratius (Deprecated)'
    },
    agentChatBot: {
      description: 'Un simple agent de chatbot creat amb SWI Prolog que respon amb una recomanació utilitzant una recerca recursiva basada en l\'imput. L\'agent respondrà amb una acció a realitzar basant-se primer a la millor frase utilitzant regles simples.',
      subtitle: 'Intel·ligència Artificial - Mòdul de 2n any',
      title: 'Agent Chatbot'
    },
    angularI18n: {
      description: 'Una biblioteca de i18n per a Angular amb claus de traducció segures per tipus i canvi d\'idioma reactiu perquè la IU s\'actualitzi instantàniament a tota l\'aplicació. Suporta interpolació i pluralització, persistència d\'idioma, traduccions de suport i càrrega diferida opcional de paquets d\'idioma per a paquets inicials més petits.',
      subtitle: 'Projecte Personal',
      title: 'Angular Library - i18n'
    },
    bbisa: {
      description: 'Projecte desenvolupat amb Angular i ASP.NET Core. Permet als usuaris rastrejar un inventari d\'ampolles de cervesa afegint els seus detalls. L\'usuari pot registrar comandes i historial de vendes que impacten la quantitat d\'estoc d\'un producte.',
      subtitle: 'Projecte de Fi d\'Any',
      title: 'Beer Bottle Inventory System App'
    },
    dataMining: {
      description: 'Aquest projecte de data mining analitza un conjunt de dades d\'historial mèdic utilitzant diferents algoritmes per predir com els pacients estan en major o menor risc segons les seves malalties. Desenvolupat amb Python i Jupyter Notebook.',
      subtitle: 'Data Mining i Sistemes de Decisions - Mòdul de 3r any',
      title: 'Anàlisi de Dades Metges'
    },
    distributedSystems: {
      description: 'Projecte ASP.NET Core Web API amb endpoints per a diverses funcions criptogràfiques mitjançant xifrat simètric i asimètric. Usa Auth basada en Claims i Entity Framework Core.',
      subtitle: 'Programació de Sistemes Distribuïts - Mòdul de 3r any',
      title: 'API i Desenvolupament de Client'
    },
    fileExplorer: {
      description: 'Un explorador d\'arxius modern que s\'utilitza per administrar les meves unitats de xarxa de forma remota. Em permet afegir, editar o eliminar arxius, actualitzar l\'ubicació i fins i tot compartir contingut. Client creat amb Angular i backend creat amb ASP.NET Core executant-se en un contenidor Docker.',
      subtitle: 'Projecte Personal',
      title: 'File Explorer (Alpha)'
    },
    jumble: {
      description: 'Joc d\'aplicació mòbil creat amb Android Studio que permet a l\'usuari completar una llista d\'imatges disponibles a Internet. El jugador ha d\'acabar un trencaclosques amb pocs moviments i pot guardar la seva puntuació per compartir-la amb altres jugadors.',
      subtitle: 'Desenvolupament Mòbil i Dispositius - Mòdul de 3r any',
      title: 'Jumble!'
    },
    mediaPlay: {
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolores vitae, suscipit autem sunt sint provident architecto maiores, possimus ea corrupti unde dignissimos ipsa, fugiat quod? Corporis doloremque culpa alias ea sint laboriosam. Eligendi ullam consectetur fugiat atque unde eveniet voluptates!',
      subtitle: 'Projecte Personal',
      title: 'Media Play (Alpha)'
    },
    myList: {
      description: 'Un web que permet als usuaris seguir les sèries i pel·lícules que estan veient. Poden afegir una sèrie i actualitzar nombre i el minut en que van deixar un episodi per última vegada. el projecte està desenvolupat amb Angular i ASP.NET Core.',
      subtitle: 'Projecte Personal',
      title: 'MyList (Beta)'
    },
    networking: {
      description: 'Un client desenvolupat amb C# i WPF, que envia sol·licituds al servidor creat en WPF amb diversos protocols HTTP, inclosos \'Whois\' i HTTP 0.9 a 1.1.',
      subtitle: 'Networking i Disseny d\'Interfície d\'Usuari - Mòdul de 2n any',
      title: 'Networking i Disseny d\'IU'
    },
    webTech: {
      description: 'Una pàgina web construïda fent servir HTML, CSS i PHP que permet rastrejar l\'ubicació d\'un estudiant o personal emmagatzemant totes les dades en una base de dades SQL.',
      subtitle: 'Sistemes Informàtics i Tecnologies Web - Mòdul de 2n any',
      title: 'Disseny d\'Interfície per Localitzador de Web'
    }
  },
  projectCard: {
    privateRepoTooltip: 'Disponible a petició',
    repoTooltip: 'Enllaç al repositori de GitHub',
    unavailableWebsiteTooltip: 'Pàgina no disponible',
    websiteTooltip: 'Veure pàgina',
    readMore: 'Llegir Més',
    readLess: 'Llegir Menys'
  },
  projectsPage: {
    filter: 'Filtrar per Tipus de Projecte',
    noProjectsError: 'Sembla que hi ha un problema a l\'hora d\'obtenir totes les dades.',
    ProjectTypeFilter: {
      All: 'Tots',
      PersonalProject: 'Projectes Personals',
      UniversityProject: 'Projectes Universitaris',
      WorkProject: 'Projectes del Treball'
    },
    visitSite: 'Visitar Pàgina'
  },
  themeMenu: {
    options: {
      DarkMode: 'Mode Fosc',
      LightMode: 'Mode Clar',
      SystemDefault: 'Predeterminat pel Sistema'
    },
    title: 'Tema'
  },
  snackbar: {
    connectionRestored: 'Connexió restaurada',
    copiedToClipboard: 'Copiat al portapapers',
    dismiss: 'Descartar',
    languageChanged: 'Idioma canviat a {0}',
    themeChanged: 'Tema canviat a {0}'
  }
};
