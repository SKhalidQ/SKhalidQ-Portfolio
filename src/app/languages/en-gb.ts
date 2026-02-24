export type LanguageStrings = typeof enGB;

// TODO: Sort alphabetically, except for enums.
export const enGB = {
  navigationButtons: {
    home: 'Home',
    curriculum: 'Curriculum',
    projects: 'Projects',
    about: 'About'
  },
  languageMenu: {
    title: 'Language',
    options: {
      enGB: 'English',
      esES: 'Spanish',
      caES: 'Catalan',
      urPK: 'Urdu'
    }
  },
  themeMenu: {
    title: 'Theme',
    options: {
      LightMode: 'Light Mode',
      DarkMode: 'Dark Mode',
      SystemDefault: 'System Default'
    }
  },
  pages: {
    Home: 'Home',
    Curriculum: 'Curriculum Vitae',
    Projects: 'Projects',
    About: 'About'
  },
  snackbar: {
    dismiss: 'Dismiss',
    themeChanged: 'Theme changed to {0}',
    languageChanged: 'Language changed to {0}',
    copiedToClipboard: 'Copied to clipboard',
    connectionRestored: 'Connection restored'
  },
  projectCard: {
    repoTooltip: 'GitHub Repository Link',
    privateRepoTooltip: 'Available at request',
    websiteTooltip: 'View site',
    unavailableWebsiteTooltip: 'Site unavailable'
  },
  errorPage: {
    forbidden: 'You do not have permission to access this page.',
    notFound: 'Looks like the page you were looking for doesn\'t exist or the link is broken.',
    genericError: 'Something went wrong on our end. Please try again later.'
  },
  projectsPage: {
    filter: 'Filter by Project Type',
    noProjectsError: 'There seems to be a problem while getting all the data.',
    visitSite: 'Visit Site',

    ProjectTypeFilter: {
      All: 'All',
      WorkProject: 'Work Projects',
      PersonalProject: 'Personal Projects',
      UniversityProject: 'University Projects'
    }
  },
  aboutPage: {
    changelog: 'Changelog',
    checkUpdates: 'Check for Updates',
    checkUpdatesDialog: {
      newUpdate: {
        title: 'New Update!',
        message: 'New content is available on this page. Would you like to update?',
        action: 'Update'
      },
      disabledUpdate: {
        title: 'Update Disabled',
        message: 'Automatic updates are not enabled in this environment.',
        action: 'Close'
      },
      noNewUpdate: {
        title: 'No Updates Available',
        message: 'You are already running the latest version of this application.',
        action: 'Close'
      },
      updateError: {
        title: 'Update Check Failed',
        message: 'Unable to check for updates at this time. Please try again later.',
        action: 'Close'
      },
      lostConnection: {
        title: 'Lost Connection',
        message: 'It seems like you have lost connection. Some features might not be accessible.',
        action: 'Close'
      }
    }
  },
  projects: {
    mediaPlay: {
      title: 'MediaPlay',
      subtitle: 'Personal Project',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, quo voluptates? Quas placeat fugiat libero eveniet saepe et minima veniam quisquam doloremque. Quia esse autem fugit odio tenetur saepe delectus.'
    },
    angularI18n: {
      title: 'Angular Library - i18n',
      subtitle: 'Personal Project',
      description: 'An Angular i18n library with type-safe translation keys and reactive language switching so the UI updates instantly across the application. Supports interpolation and pluralisation, language persistence, fallback translations, and optional lazy-loading of language packs for smaller initial bundles.'
    },
    fileExplorer: {
      title: 'File Explorer (Alpha)',
      subtitle: 'Personal Project',
      description:'A modern file explorer used to manage my network drives remotely. Allows me to add, edit or delete files, update their location and even share content. Client built using Angular and backend built using ASP.NET Core running in a Docker container.'
    },
    myList: {
      title: 'MyList (Beta)',
      subtitle: 'Personal Project',
      description: 'A web application that allows users to track the series and movies they are watching. They can add a series and update the episode number and minute where they last left off. The project is developed using Angular and ASP.NET Core.'
    },
    adminCommands: {
      title: 'Administrative Commands (Deprecated)',
      subtitle: 'Personal Project',
      description: 'A batch script with a collection of commands for easier access. Commands such as enabling the local administrator account to extract all the information related to the device and others.'
    },
    bbisa: {
      title: 'Beer Bottle Inventory System App',
      subtitle: 'Honours Stage Project',
      description: 'Final year project built using Angular and ASP.NET Core. It allows users to track a beer bottle inventory by adding their details. The user can log orders and history of the sales which impact the stock amount of a product.'
    },
    distributedSystems: {
      title: 'API and Client Development',
      subtitle: 'Distributed Systems Programming - 3rd year module',
      description: 'ASP.NET Core Web API project with endpoints for various cryptographic functions using symmetric and asymmetric encryption. Uses claims-based authorization and Entity Framework Core.'
    },
    jumble: {
      title: 'Jumble!',
      subtitle: 'Mobile Development and Devices - 3rd Year Module',
      description: 'A mobile app game built using Android Studio (Java) which allows the user to complete a list of images available on the internet. The player has to finish the puzzle with the fewest moves and can store their score to share with other players.'
    },
    dataMining: {
      title: 'Medical Data Analysis',
      subtitle: 'Data Mining and Decision Systems - 3rd Year Module',
      description: 'This Data Mining project analyses a medical history dataset using different algorithms to predict how patients are more at risk depending on their diseases. Built using Python and Jupyter Notebook.'
    },
    networking: {
      title: 'Networking and UI Design',
      subtitle: 'Networking and User Interface Design - 2nd Year Module',
      description: 'A client developed using C# and WPF, which sends requests to the server built in WPF with different HTTP Protocols including \'Whois\' and HTTP 0.9 - 1.1.'
    },
    webTech: {
      title: 'Web Location Interface Design',
      subtitle: 'Information Systems and Web Technologies - 2nd Year Module',
      description: 'A website built using HTML, CSS and PHP which allows tracking a student or staff\' location by storing all the data in a SQL Database.'
    },
    agentChatBot: {
      title: 'Agent Chatbot',
      subtitle: 'Artificial Intelligence - 2nd Year Module',
      description: 'A simple chatbot agent built using SWI Prolog which responds with a recommendation using recursive search based on the input sentence. The agent will reply with an action to take based first on the best match using simple rules.'
    }
  },
  homePage: {
    title: 'Welcome to My Portfolio!',
    cvHighlight: {
      description: 'Explore my professional journey, skills, experiences and interests in my CV.',
      navigationButton: {
        text: 'View Curriculum'
      }
    },
    projectsHighlight: {
      description: 'Discover my projects and the technologies I\'ve used.',
      navigationButton: {
        text: 'View Projects'
      }
    }
  },
  curriculumPage: {
    copyToClipboard: 'Copy to clipboard',
    header: {
      name: 'Sad Khalid Qayyum',
      title: 'Software Engineer - Full Stack Developer'
    },
    profile: {
      title: 'Profile',
      description: 'Full stack developer with four years of experience in building and maintaining web applications and cloud infrastructure in Agile, cross-functional teams. Dedicated to delivering scalable, high-quality software, with a strong foundation in web development and a passion for continuous learning.'
    },
    employmentHistory: {
      title: 'Employment History',
      jobs: {
        weatherford: {
          title: 'Software Engineer - Weatherford Ltd (Reeves Wireline Technologies)',
          description: 'Work in Weatherford\'s Wireline division, developing software for downhole data acquisition, file management, and real-time log visualisation across both CAPEX and OPEX projects in support of oilfield operations.',
          dates: 'Dec 2021 - Present'
        },
        greenwood: {
          title: 'IT Support Technician - Greenwood Academies Trust',
          description: 'Formed part of a high-paced IT support department. Delivered technical support to the academy\'s staff members and performed various tasks including server maintenance, device management and troubleshooting.',
          dates: 'Jan 2020 - Nov 2021'
        },
        homeFundraising: {
          title: 'Door to Door Fundraiser - Home Fundraising',
          description: 'Spreading awareness on how the organization is helping people and how others can help.',
          dates: 'Feb 2017'
        }
      }
    },
    educationHistory: {
      title: 'Education',
      institutions: {
        university: {
          title: 'BSc (Hons) Computer Science (2:1) - University of Hull',
          description: 'Studied a wide range of topics including: Distributed systems programming, mobile application development, data mining and decision systems, and web technologies. Complete list of modules available on request.',
        },
        academy: {
          title: 'Nottingham Academy',
          description: 'A-Level Spanish and BTEC Level 3 Diploma in Business, 5 GCSEs Inc. Maths and English, 3 BTECs Inc. Science'
        }
      }
    },
    technicalSkills: {
      title: 'Technical Skills',
      sections: {
        backendDevelopment: {
          title: 'Backend Development',
          skills: {
            dotNet: {
              title: 'C#/.Net, ASP.NET Core, Entity Framework',
              description: 'Extensive professional experience building APIs, UI applications, and console tools, applying OOP principles, dependency injection, and common design patterns, along with writing automated tests using NUnit.'
            },
            sql: {
              title: 'SQL',
              description: 'Strong experience designing relational models, writing queries, and working with production databases.'
            }
          }
        },
        frontendDevelopment: {
          title: 'Frontend Development',
          skills: {
            angular: {
              title: 'Angular',
              description: 'Personal experience across multiple personal projects; familiar with component architecture, routing, services, guards, and more.'
            },
            react: {
              title: 'React',
              description: 'Professional experience building component-based UIs, writing unit tests and developing a reusable visualisation library.'
            },
            others: {
              title: 'Javascript/TypeScript, CSS/SCSS',
              description: 'Used across different frameworks to build UI tools and interactive applications.'
            }
          }
        },
        cloudAndInfrastructure: {
          title: 'Cloud & Infrastructure',
          skills: {
            msAzure: {
              title: 'Microsoft Azure',
              description: 'Experience maintaining the cloud infrastructure for production applications, including creating and updating services, monitoring hosted applications, and provisioning cloud resources with terraform using infrastructure as services.'
            },
            docker: {
              title: 'Docker/Kubernetes',
              description: 'Experience deploying and maintaining containerised applications including both custom projects and publicly available images.'
            }
          }
        },
        devOpsAndTooling: {
          title: 'DevOps & Tooling',
          skills: {
            devOpsAndSourceControl: {
              title: 'Azure DevOps, Git, GitHub',
              description: 'Working with Azure DevOps for boards, backlogs, sprint planning and CI/CD pipelines; with GitHub for personal projects with workflow automation and releases; and with Git across both platforms for repository management, branching, pull requests and code reviews.'
            }
          }
        }
      }
    },
    achievements: {
      title: 'Achievements',
      list: {
        azureFundamentals: {
          title: 'Microsoft Certified: Azure Fundamentals',
          year: 'Nov 2024',
          description: 'Completed the AZ-900 certification which demonstrates foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.'
        }
      }
    },
    languages: {
      title: 'Languages',
      english: 'English (Professional)',
      spanish: 'Spanish (Native)',
      catalan: 'Catalan (Native)',
      urdu: 'Urdu (Native)',
      punjabi: 'Punjabi (Native)'
    },
    hobbies: {
      title: 'Hobbies',
      hobbies: {
        movies: 'Movies & Series',
        gaming: 'Gaming',
        music: 'Music',
        videoEditing: 'Video Editing',
        code: 'Code',
        fitness: 'Fitness'
      }
    }
  }
};
