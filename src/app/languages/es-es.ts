import { LanguageStrings } from './en-gb';

export const esES: LanguageStrings = {
  navigationButtons: {
    home: 'Inicio',
    curriculum: 'Currículum',
    projects: 'Proyectos',
    about: 'Acerca de'
  },
  languageMenu: {
    title: 'Idioma',
    options: {
      enGB: 'Inglés',
      esES: 'Castellano',
      caES: 'Catalán',
      urPK: 'Urdú'
    }
  },
  themeMenu: {
    title: 'Tema',
    options: {
      LightMode: 'Modo Claro',
      DarkMode: 'Modo Oscuro',
      SystemDefault: 'Predeterminado del Sistema'
    }
  },
  pages: {
    Home: 'Inicio',
    Curriculum: 'Currículum Vitae',
    Projects: 'Proyectos',
    About: 'Acerca de'
  },
  snackbar: {
    dismiss: 'Descartar',
    themeChanged: 'Tema cambiado a {0}',
    languageChanged: 'Idioma cambiado a {0}',
    copiedToClipboard: 'Copiado al portapapeles',
    connectionRestored: 'Conexión restaurada'
  },
  projectCard: {
    repoTooltip: 'Enlace al repositorio de GitHub',
    privateRepoTooltip: 'Disponible a petición',
    websiteTooltip: 'Ver sitio',
    unavailableWebsiteTooltip: 'Página no disponible'
  },
  errorPage: {
    forbidden: 'No tienes permiso para acceder a esta página.',
    notFound: 'Parece que la página que estabas buscando no existe o el enlace está roto.',
    genericError: 'Algo salió mal en nuestro lado. Por favor, inténtalo de nuevo más tarde.'
  },
  projectsPage: {
    filter: 'Filtrar por Tipo de Proyecto',
    noProjectsError: 'Parece que hay un problema al obtener todos los datos.',
    visitSite: 'Visitar Sitio',

    ProjectTypeFilter: {
      All: 'Todos',
      WorkProject: 'Proyectos del Trabajo',
      PersonalProject: 'Proyectos Personales',
      UniversityProject: 'Proyectos Universitarios'
    }
  },
  aboutPage: {
    changelog: 'Registro de cambios',
    checkUpdates: 'Comprobar Actualizaciones',
    checkUpdatesDialog: {
      newUpdate: {
        title: 'Nueva Actualización!',
        message: 'Hay nuevo contenido disponible en esta página. ¿Quieres actualizar?',
        action: 'Actualizar'
      },
      disabledUpdate: {
        title: 'Actualización Desactivada',
        message: 'Las actualizaciones automáticas no están habilitadas en este entorno.',
        action: 'Cerrar'
      },
      noNewUpdate: {
        title: 'No hay Actualizaciones Disponibles',
        message: 'Ya estás ejecutando la versión más reciente de esta aplicación.',
        action: 'Cerrar'
      },
      updateError: {
        title: 'Error al Comprobar Actualizaciones',
        message: 'No se ha podido comprobar si hay actualizaciones en este momento. Por favor, inténtalo de nuevo más tarde.',
        action: 'Cerrar'
      },
      lostConnection: {
        title: 'Sin Conexión',
        message: 'Parece que has perdido la conexión. Algunas funciones podrían no estar accesibles.',
        action: 'Cerrar'
      }
    }
  },
  projects: {
    mediaPlay: {
      title: 'MediaPlay',
      subtitle: 'Proyecto Personal',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, quo voluptates? Quas placeat fugiat libero eveniet saepe et minima veniam quisquam doloremque. Quia esse autem fugit odio tenetur saepe delectus.'
    },
    angularI18n: {
      title: 'Angular Library - i18n',
      subtitle: 'Proyecto Personal',
      description: 'Una biblioteca de i18n para Angular con claves de traducción seguras para tipos y cambio de idioma reactivo para que la IU se actualice instantáneamente en toda la aplicación. Soporta interpolación y pluralización, persistencia de idioma, traducciones de respaldo y carga diferida opcional de paquetes de idioma para paquetes iniciales más pequeños.'
    },
    fileExplorer: {
      title: 'File Explorer (Alpha)',
      subtitle: 'Proyecto Personal',
      description:'Un explorador de archivos moderno que se usa para administrar mis unidades de red de forma remota. Me permite añadir, editar o eliminar archivos, actualizar su ubicación e incluso compartir contenido. Cliente creado con Angular y backend creado con ASP.NET Core ejecutándose en un contenedor Docker.'
    },
    myList: {
      title: 'MyList (Beta)',
      subtitle: 'Proyecto Personal',
      description: 'Una web que permite a los usuarios seguir las series y películas que están viendo. Pueden añadir una serie y actualizar el número y el minuto en que dejaron un episodio por última vez. El proyecto está desarrollado con Angular y ASP.NET Core.'
    },
    adminCommands: {
      title: 'Administrative Commands (Deprecated)',
      subtitle: 'Proyecto Personal',
      description: 'Un script en Batch con una colección de comandos para facilitar su acceso. Comandos como habilitar la cuenta de administrador local para extraer toda la información relacionada con el dispositivo y otras funciones.'
    },
    bbisa: {
      title: 'Beer Bottle Inventory System App',
      subtitle: 'Proyecto de Fin de Año',
      description: 'Proyecto desarrollado con Angular y ASP.NET Core. Permite a los usuarios rastrear un inventario de botellas de cerveza añadiendo sus detalles. El usuario puede registrar pedidos e historial de ventas que impactan la cantidad de stock de un producto.'
    },
    distributedSystems: {
      title: 'API y Desarrollo de Clientes',
      subtitle: 'Programación de Sistemas Distribuidos - Módulo del 3er Año',
      description: 'Proyecto de ASP.NET Core Web API con endpoints para varias funciones criptográficas mediante cifrado simétrico y asimétrico. Usa Auth basada en Claims y Entity Framework Core.'
    },
    jumble: {
      title: 'Jumble!',
      subtitle: 'Desarrollo Móvil y Dispositivos - Módulo del 3er Año',
      description: 'Juego de aplicación móvil creado con Android Studio que permite al usuario completar una lista de imágenes disponibles en Internet. El jugador tiene que terminar el puzle con pocos movimientos y puede almacenar su puntuación para compartir con otros jugadores.'
    },
    dataMining: {
      title: 'Análisis de Datos Médicos',
      subtitle: 'Data Mining y Sistemas de Decisión - Módulo del 3er Año',
      description: 'Este proyecto de data mining analiza un conjunto de datos de historial médico utilizando diferentes algoritmos para predecir cómo los pacientes están en mayor o menor riesgo según sus enfermedades. Desarrollado con Python y Jupyter Notebook.'
    },
    networking: {
      title: 'Networking y Diseño de IU',
      subtitle: 'Networking y Diseño de IU - Módulo del 2do Año',
      description: 'Un cliente desarrollado con C# y WPF, que envía solicitudes al servidor creado en WPF con diferentes protocolos HTTP, incluidos \'Whois\' y HTTP 0.9 a 1.1.'
    },
    webTech: {
      title: 'Interfaz para Localizador de Web',
      subtitle: 'Sistemas de Información y Tecnologías Web - Módulo del 2do Año',
      description: 'Una web construida usando HTML, CSS y PHP que permite rastrear la ubicación de un estudiante o personal almacenando todos los datos en una base de datos SQL.'
    },
    agentChatBot: {
      title: 'Agente de Chatbot',
      subtitle: 'Inteligencia Artificial - Módulo del 2do Año',
      description: 'Un agente de chatbot simple creado con SWI Prolog que responde con una recomendación utilizando una búsqueda recursiva basada en el input. El agente responderá con una acción a realizar basándose primero en la mejor frase utilizando reglas simples.'
    }
  },
  homePage: {
    title: 'Bienvenido a Mi Portafolio!',
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
    }
  },
  curriculumPage: {
    copyToClipboard: 'Copiar al portapapeles',
    header: {
      name: 'Sad Khalid Qayyum',
      title: 'Ingeniero de Software - Desarrollador Full Stack'
    },
    profile: {
      title: 'Perfil',
      description: 'Desarrollador Full Stack con cuatro años de experiencia en la construcción y mantenimiento de aplicaciones web e infraestructura en la nube en equipos ágiles y multifuncionales. Dedicado a entregar software escalable y de alta calidad, con una sólida base en desarrollo web y una pasión por el aprendizaje continuo.'
    },
    employmentHistory: {
      title: 'Historial Laboral',
      jobs: {
        weatherford: {
          title: 'Ingeniero Informático - Weatherford Ltd (Reeves Wireline Technologies)',
          description: 'Trabajé en la división de Wireline de Weatherford, desarrollando software para la adquisición de datos en pozos, gestión de archivos y visualización de registros en tiempo real en proyectos CAPEX y OPEX en apoyo a las operaciones petroleras.',
          dates: 'Dic 2021 - Presente'
        },
        greenwood: {
          title: 'Técnico de Soporte de IT - Greenwood Academies Trust',
          description: 'Formar parte de un departamento de soporte de IT de alto ritmo. Proporcionar soporte técnico a los miembros del personal de la academia y realizar diversas tareas incluido el mantenimiento de los servidores, la administración de dispositivos y la resolución de problemas.',
          dates: 'Ene 2020 - Nov 2021'
        },
        homeFundraising: {
          title: 'Recaudador de Fondos Puerta a Puerta - Home Fundraising',
          description: 'Difundir conciencia sobre cómo la organización está ayudando a las personas y cómo otros pueden ayudar.',
          dates: 'Feb 2017'
        }
      }
    },
    educationHistory: {
      title: 'Educación',
      institutions: {
        university: {
          title: 'BSc (Hons) Computer Science (2:1) - University of Hull',
          description: 'Estudié una amplia gama de temas que incluyen: programación de sistemas distribuidos, desarrollo de aplicaciones móviles, data mining y sistemas de decisión y, tecnologías web. Lista completa de módulos disponible a petición.',
        },
        academy: {
          title: 'Nottingham Academy',
          description: 'A-Level Español y BTEC Nivel 3 Diploma en Negocios,\n5 GCSEs Incluyendo Matemáticas e Inglés, 3 BTECs Incluyendo Ciencias'
        }
      }
    },
    technicalSkills: {
      title: 'Habilidades Técnicas'
    },
    nonTechnicalSkills: {
      title: 'Habilidades No Técnicas',
      skills: {
        teamwork: {
          title: 'Trabajo en Equipo',
          description: 'Trabajé en un entorno muy ocupado en Greenwood Academies Trust como Técnico de IT, lo que implicó colaborar con el equipo para resolver situaciones críticas. Realicé múltiples proyectos de trabajo en grupo durante mi educación y superé desafíos trabajando en equipo para lograr los objetivos.'
        },
        communication: {
          title: 'Comunicación',
          description: 'Proporcioné un servicio de soporte amigable y útil, me comuniqué con mis compañeros durante mi trabajo como técnico de IT. Ayudé a crear conciencia como una organización benéfica para recaudar fondos. Presenté información técnica de forma clara y concisa para presentaciones universitarias. Participé y actué con éxito en varias obras de teatro en la universidad.'
        },
        organisation: {
          title: 'Organización',
          description: 'Priorizé los casos de soporte de IT reorganizándolos según la gravedad del problema y proporcioné soporte lo más rápido posible. Entregué innumerables proyectos durante la universidad y el instituto para fechas límites específicas administrando el tiempo y priorizando funciones importantes.'
        }
      }
    },
    achievements: {
      title: 'Logros',
      list: {
        azureFundamentals: {
          title: 'Microsoft Certified: Azure Fundamentals',
          year: 'Nov 2024',
          description: 'Completé la certificación AZ-900 que demuestra un conocimiento básico de los servicios en la nube y cómo se proporcionan esos servicios con Microsoft Azure.'
        }
      }
    },
    hobbies: {
      title: 'Aficiones',
      hobbies: {
        movies: 'Películas y Series',
        gaming: 'Videojuegos',
        music: 'Música',
        videoEditing: 'Edición de Video',
        code: 'Programación',
        fitness: 'Fitness'
      }
    }
  }
};
