import { LanguageStrings } from './en-gb';

export const esES: LanguageStrings = {
  aboutPage: {
    changelog: 'Registro de cambios',
    checkUpdates: 'Comprobar Actualizaciones',
    checkUpdatesDialog: {
      action : {
        cancel: 'Cancelar',
        close: 'Cerrar',
        update: 'Actualizar'
      },
      disabledUpdate: {
        message: 'Las actualizaciones automáticas no están habilitadas en este entorno.',
        title: 'Actualización Desactivada'
      },
      lostConnection: {
        message: 'Parece que has perdido la conexión. Algunas funciones podrían no estar accesibles.',
        title: 'Sin Conexión'
      },
      newUpdate: {
        message: 'Hay nuevo contenido disponible en esta página. ¿Quieres actualizar?',
        title: 'Nueva Actualización!'
      },
      noNewUpdate: {
        message: 'Ya estás ejecutando la versión más reciente de esta aplicación.',
        title: 'No hay Actualizaciones Disponibles'
      },
      updateError: {
        message: 'No se ha podido comprobar si hay actualizaciones en este momento. Por favor, inténtalo de nuevo más tarde.',
        title: 'Error al Comprobar Actualizaciones'
      }
    }
  },
  curriculumPage: {
    achievements: {
      list: {
        azureFundamentals: {
          description: 'Completé la certificación AZ-900 que demuestra un conocimiento básico de los servicios en la nube y cómo se proporcionan esos servicios con Microsoft Azure.',
          title: 'Microsoft Certified: Azure Fundamentals',
          year: 'Nov 2024'
        }
      },
      title: 'Logros'
    },
    copyToClipboard: 'Copiar al portapapeles',
    educationHistory: {
      institutions: {
        academy: {
          dates: 'Sep 2012 - Jun 2016',
          description: 'A-Level Español y BTEC Nivel 3 Diploma en Negocios,\n5 GCSEs Incluyendo Matemáticas e Inglés, 3 BTECs Incluyendo Ciencias',
          title: 'Nottingham Academy'
        },
        university: {
          dates: 'Sep 2017 - Jun 2020',
          description: 'Estudié una amplia gama de temas que incluyen: programación de sistemas distribuidos, desarrollo de aplicaciones móviles, data mining y sistemas de decisión y, tecnologías web. Lista completa de módulos disponible a petición.',
          title: 'BSc (Hons) Computer Science (2:1) - University of Hull'
        }
      },
      title: 'Educación'
    },
    employmentHistory: {
      jobs: {
        greenwood: {
          dates: 'Ene 2020 - Nov 2021',
          description: 'Formar parte de un departamento de soporte de IT de alto ritmo. Proporcionar soporte técnico a los miembros del personal de la academia y realizar diversas tareas incluido el mantenimiento de los servidores, la administración de dispositivos y la resolución de problemas.',
          title: 'Técnico de Soporte de IT - Greenwood Academies Trust'
        },
        homeFundraising: {
          dates: 'Feb 2017',
          description: 'Difundir conciencia sobre cómo la organización está ayudando a las personas y cómo otros pueden ayudar.',
          title: 'Recaudador de Fondos Puerta a Puerta - Home Fundraising'
        },
        weatherford: {
          dates: 'Dic 2021 - Presente',
          description: 'Trabajo en la división de Wireline de Weatherford, desarrollando software para la adquisición de datos en el fondo del pozo, gestión de archivos y visualización de registros en tiempo real en proyectos CAPEX y OPEX en apoyo a las operaciones petroleras.',
          title: 'Ingeniero Informático - Weatherford Ltd (Reeves Wireline Technologies)'
        }
      },
      title: 'Historial Laboral'
    },
    header: {
      name: 'Sad Khalid Qayyum',
      title: 'Ingeniero de Software - Desarrollador Full Stack'
    },
    hobbies: {
      hobbies: {
        badminton: 'Badminton',
        code: 'Programación',
        designing: 'Diseño de Interfaces',
        fitness: 'Fitness',
        gaming: 'Videojuegos',
        videoEditing: 'Edición de Video'
      },
      title: 'Aficiones'
    },
    languages: {
      catalan: 'Catalán (Nativo)',
      english: 'Inglés (Profesional)',
      punjabi: 'Panyabí (Nativo)',
      spanish: 'Castellano (Nativo)',
      title: 'Idiomas',
      urdu: 'Urdú (Nativo)'
    },
    profile: {
      description: 'Desarrollador Full Stack con cuatro años de experiencia en la construcción y mantenimiento de aplicaciones web e infraestructura en la nube en equipos ágiles y multifuncionales. Dedicado a entregar software escalable y de alta calidad, con una sólida base en desarrollo web y una pasión por el aprendizaje continuo.',
      title: 'Perfil'
    },
    technicalSkills: {
      sections: {
        backendDevelopment: {
          skills: {
            dotNet: {
              description: 'Extensa experiencia profesional construyendo APIs, aplicaciones de UI y herramientas de consola, aplicando principios de OOP, inyección de dependencias y patrones de diseño comunes, junto con la escritura de pruebas automatizadas usando NUnit.',
              title: 'C#/.Net, ASP.NET Core, Entity Framework'
            },
            sql: {
              description: 'Amplia experiencia diseñando modelos relacionales, escribiendo consultas y trabajando con bases de datos en producción.',
              title: 'SQL'
            }
          },
          title: 'Desarrollador Backend'
        },
        cloudAndInfrastructure: {
          skills: {
            docker: {
              description: 'Experiencia desplegando y manteniendo aplicaciones en contenedores, incluyendo tanto proyectos personalizados como imágenes disponibles públicamente.',
              title: 'Docker/Kubernetes'
            },
            msAzure: {
              description: 'Experiencia manteniendo la infraestructura en la nube para aplicaciones de producción, incluyendo la creación y actualización de servicios, monitoreo de aplicaciones alojadas y aprovisionamiento de recursos en la nube con Terraform utilizando infraestructura como servicio.',
              title: 'Microsoft Azure'
            }
          },
          title: 'Cloud & Infraestructura'
        },
        devOpsAndTooling: {
          skills: {
            devOpsAndSourceControl: {
              description: 'Experiencia trabajando con Azure DevOps para tableros, backlogs, planificación de sprints y pipelines de CI/CD; con GitHub para proyectos personales con automatización de flujo de trabajo y lanzamientos; y con Git en ambas plataformas para la gestión de repositorios, ramificación, pull requests y revisiones de código.',
              title: 'Azure DevOps, Git, GitHub'
            },
            aiAndAutomation: {
              description: 'Experiencia profesional y personal a través de trabajo y proyectos personales; utilizando GitHub Copilot y otros LLMs (Claude, GPT) para acelerar el prototipado, generar pruebas/configuración y automatizar tareas rutinarias, con revisión manual y propiedad final.',
              title: 'IA & Automatización'
            }
          },
          title: 'DevOps & Herramientas'
        },
        frontendDevelopment: {
          skills: {
            angular: {
              description: 'Experiencia personal en varios proyectos personales; familiarizado con la arquitectura de componentes, enrutamiento, servicios, guards y más.',
              title: 'Angular'
            },
            react: {
              description: 'Experiencia profesional construyendo interfaces de usuario basadas en componentes, escribiendo pruebas unitarias y desarrollando una biblioteca de visualización reutilizable.',
              title: 'React'
            },
            others: {
              description: 'Experiencia utilizando diferentes frameworks para construir herramientas de UI y aplicaciones interactivas.',
              title: 'Javascript/TypeScript, CSS/SCSS'
            }
          },
          title: 'Desarrollador Frontend'
        }
      },
      title: 'Habilidades Técnicas'
    }
  },
  environments: {
    Alpha: 'Alfa',
    Beta: 'Beta'
  },
  errorPage: {
    forbidden: 'No tienes permiso para acceder a esta página.',
    genericError: 'Algo salió mal en nuestro lado. Por favor, inténtalo de nuevo más tarde.',
    notFound: 'Parece que la página que estabas buscando no existe o el enlace está roto.'
  },
  homePage: {
    cvHighlight: {
      description: 'Explora mi trayectoria profesional, habilidades, experiencias e intereses en mi CV.',
      navigationButton: {
        text: 'Ver Curriculum'
      }
    },
    projectsHighlight: {
      description: 'Descubre mis proyectos y las tecnologías que he utilizado.',
      navigationButton: {
        text: 'Ver Proyectos'
      }
    },
    title: 'Bienvenido a Mi Portafolio!'
  },
  languageMenu: {
    options: {
      caES: 'Catalán',
      enGB: 'Inglés',
      esES: 'Castellano',
      paPK: 'Panyabí',
      urPK: 'Urdú'
    },
    title: 'Idioma'
  },
  navigationButtons: {
    about: 'Acerca de',
    curriculum: 'Currículum',
    home: 'Inicio',
    projects: 'Proyectos'
  },
  pages: {
    About: 'Acerca de',
    Curriculum: 'Currículum Vitae',
    Home: 'Inicio',
    Projects: 'Proyectos'
  },
  portfolio: 'Portafolio',
  projects: {
    adminCommands: {
      description: 'Un script en Batch con una colección de comandos para facilitar su acceso. Comandos como habilitar la cuenta de administrador local para extraer toda la información relacionada con el dispositivo y otras funciones.',
      subtitle: 'Proyecto Personal',
      title: 'Administrative Commands (Deprecated)'
    },
    agentChatBot: {
      description: 'Un agente de chatbot simple creado con SWI Prolog que responde con una recomendación utilizando una búsqueda recursiva basada en el input. El agente responderá con una acción a realizar basándose primero en la mejor frase utilizando reglas simples.',
      subtitle: 'Inteligencia Artificial - Módulo del 2do Año',
      title: 'Agente de Chatbot'
    },
    angularI18n: {
      description: 'Una biblioteca de i18n para Angular con claves de traducción seguras para tipos y cambio de idioma reactivo para que la IU se actualice instantáneamente en toda la aplicación. Soporta interpolación y pluralización, persistencia de idioma, traducciones de respaldo y carga diferida opcional de paquetes de idioma para paquetes iniciales más pequeños.',
      subtitle: 'Proyecto Personal',
      title: 'Angular Library - i18n'
    },
    bbisa: {
      description: 'Proyecto desarrollado con Angular y ASP.NET Core. Permite a los usuarios rastrear un inventario de botellas de cerveza añadiendo sus detalles. El usuario puede registrar pedidos e historial de ventas que impactan la cantidad de stock de un producto.',
      subtitle: 'Proyecto de Fin de Año',
      title: 'Beer Bottle Inventory System App'
    },
    dataMining: {
      description: 'Este proyecto de data mining analiza un conjunto de datos de historial médico utilizando diferentes algoritmos para predecir cómo los pacientes están en mayor o menor riesgo según sus enfermedades. Desarrollado con Python y Jupyter Notebook.',
      subtitle: 'Data Mining y Sistemas de Decisión - Módulo del 3er Año',
      title: 'Análisis de Datos Médicos'
    },
    distributedSystems: {
      description: 'Proyecto de ASP.NET Core Web API con endpoints para varias funciones criptográficas mediante cifrado simétrico y asimétrico. Usa Auth basada en Claims y Entity Framework Core.',
      subtitle: 'Programación de Sistemas Distribuidos - Módulo del 3er Año',
      title: 'API y Desarrollo de Clientes'
    },
    fileExplorer: {
      description: 'Un explorador de archivos moderno que se usa para administrar mis unidades de red de forma remota. Me permite añadir, editar o eliminar archivos, actualizar su ubicación e incluso compartir contenido. Cliente creado con Angular y backend creado con ASP.NET Core ejecutándose en un contenedor Docker.',
      subtitle: 'Proyecto Personal',
      title: 'File Explorer (Alpha)'
    },
    jumble: {
      description: 'Juego de aplicación móvil creado con Android Studio que permite al usuario completar una lista de imágenes disponibles en Internet. El jugador tiene que terminar el puzle con pocos movimientos y puede almacenar su puntuación para compartir con otros jugadores.',
      subtitle: 'Desarrollo Móvil y Dispositivos - Módulo del 3er Año',
      title: 'Jumble!'
    },
    mediaPlay: {
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, quo voluptates? Quas placeat fugiat libero eveniet saepe et minima veniam quisquam doloremque. Quia esse autem fugit odio tenetur saepe delectus.',
      subtitle: 'Proyecto Personal',
      title: 'MediaPlay'
    },
    myList: {
      description: 'Una web que permite a los usuarios seguir las series y películas que están viendo. Pueden añadir una serie y actualizar el número y el minuto en que dejaron un episodio por última vez. El proyecto está desarrollado con Angular y ASP.NET Core.',
      subtitle: 'Proyecto Personal',
      title: 'MyList (Beta)'
    },
    networking: {
      description: 'Un cliente desarrollado con C# y WPF, que envía solicitudes al servidor creado en WPF con diferentes protocolos HTTP, incluidos \'Whois\' y HTTP 0.9 a 1.1.',
      subtitle: 'Networking y Diseño de IU - Módulo del 2do Año',
      title: 'Networking y Diseño de IU'
    },
    webTech: {
      description: 'Una web construida usando HTML, CSS y PHP que permite rastrear la ubicación de un estudiante o personal almacenando todos los datos en una base de datos SQL.',
      subtitle: 'Sistemas de Información y Tecnologías Web - Módulo del 2do Año',
      title: 'Interfaz para Localizador de Web'
    }
  },
  projectCard: {
    privateRepoTooltip: 'Disponible a petición',
    repoTooltip: 'Enlace al repositorio de GitHub',
    unavailableWebsiteTooltip: 'Página no disponible',
    websiteTooltip: 'Ver sitio'
  },
  projectsPage: {
    filter: 'Filtrar por Tipo de Proyecto',
    noProjectsError: 'Parece que hay un problema al obtener todos los datos.',
    ProjectTypeFilter: {
      All: 'Todos',
      PersonalProject: 'Proyectos Personales',
      UniversityProject: 'Proyectos Universitarios',
      WorkProject: 'Proyectos del Trabajo'
    },
    visitSite: 'Visitar Sitio'
  },
  themeMenu: {
    options: {
      DarkMode: 'Modo Oscuro',
      LightMode: 'Modo Claro',
      SystemDefault: 'Predeterminado del Sistema'
    },
    title: 'Tema'
  },
  snackbar: {
    connectionRestored: 'Conexión restaurada',
    copiedToClipboard: 'Copiado al portapapeles',
    dismiss: 'Descartar',
    languageChanged: 'Idioma cambiado a {0}',
    themeChanged: 'Tema cambiado a {0}'
  }
};
