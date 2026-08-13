export type LanguageStrings = typeof enGB;

export const enGB = {
  aboutPage: {
    changelog: 'Changelog',
    checkUpdates: 'Check for Updates',
    checkUpdatesDialog: {
      action : {
        cancel: 'Cancel',
        close: 'Close',
        update: 'Update'
      },
      disabledUpdate: {
        message: 'Automatic updates are not enabled in this environment.',
        title: 'Update Disabled'
      },
      lostConnection: {
        message: 'It seems like you have lost connection. Some features might not be accessible.',
        title: 'Lost Connection'
      },
      newUpdate: {
        message: 'New content is available on this page. Would you like to update?',
        title: 'New Update!'
      },
      noNewUpdate: {
        message: 'You are already running the latest version of this application.',
        title: 'No Updates Available'
      },
      updateError: {
        message: 'Unable to check for updates at this time. Please try again later.',
        title: 'Update Check Failed'
      }
    }
  },
  curriculumPage: {
    achievements: {
      list: {
        azureFundamentals: {
          description: 'Completed the AZ-900 certification which demonstrates foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.',
          title: 'Microsoft Certified: Azure Fundamentals',
          year: 'Nov 2024'
        }
      },
      title: 'Achievements'
    },
    copyToClipboard: 'Copy to clipboard',
    educationHistory: {
      institutions: {
        academy: {
          dates: 'Sep 2012 - Jun 2016',
          description: 'A-Level Spanish and BTEC Level 3 Diploma in Business, 5 GCSEs Inc. Maths and English, 3 BTECs Inc. Science',
          title: 'Nottingham Academy'
        },
        university: {
          dates: 'Sep 2017 - Jun 2020',
          description: 'Studied a wide range of topics including: Distributed systems programming, mobile application development, data mining and decision systems, and web technologies. Complete list of modules available on request.',
          title: 'BSc (Hons) Computer Science (2:1) - University of Hull'
        }
      },
      title: 'Education'
    },
    employmentHistory: {
      jobs: {
        greenwood: {
          dates: 'Jan 2020 - Nov 2021',
          description: 'Formed part of a high-paced IT support department. Delivered technical support to the academy\'s staff members and performed various tasks including server maintenance, device management and troubleshooting.',
          title: 'IT Support Technician - Greenwood Academies Trust'
        },
        homeFundraising: {
          dates: 'Feb 2017',
          description: 'Spreading awareness on how the organization is helping people and how others can help.',
          title: 'Door to Door Fundraiser - Home Fundraising'
        },
        weatherford: {
          dates: 'Dec 2021 - March 2026',
          description: 'Worked in Weatherford\'s Wireline division, developing software for downhole data acquisition, file management, and real-time log visualisation across both CAPEX and OPEX projects in support of oilfield operations.',
          title: 'Software Engineer - Weatherford Ltd (Reeves Wireline Technologies)'
        }
      },
      title: 'Employment History'
    },
    header: {
      name: 'Sad Khalid Qayyum',
      title: 'Software Engineer - Full Stack Developer'
    },
    hobbies: {
      hobbies: {
        badminton: 'Badminton',
        code: 'Programming',
        designing: 'Designing Interfaces',
        fitness: 'Fitness',
        gaming: 'Gaming',
        videoEditing: 'Video Editing'
      },
      title: 'Hobbies'
    },
    languages: {
      catalan: 'Catalan (Native)',
      english: 'English (Professional)',
      punjabi: 'Punjabi (Native)',
      spanish: 'Spanish (Native)',
      title: 'Languages',
      urdu: 'Urdu (Native)'
    },
    profile: {
      description: 'Full stack developer with four years of experience in building and maintaining web applications and cloud infrastructure in Agile, cross-functional teams. Dedicated to delivering scalable, high-quality software, with a strong foundation in web development and a passion for continuous learning.',
      title: 'Profile'
    },
    technicalSkills: {
      sections: {
        backendDevelopment: {
          skills: {
            dotNet: {
              description: 'Extensive professional experience building APIs, UI applications, and console tools, applying OOP principles, dependency injection, and common design patterns, along with writing automated tests using NUnit.',
              title: 'C#/.Net, ASP.NET Core, Entity Framework'
            },
            sql: {
              description: 'Strong experience designing relational models, writing queries, and working with production databases.',
              title: 'SQL'
            }
          },
          title: 'Backend Development'
        },
        cloudAndInfrastructure: {
          skills: {
            docker: {
              description: 'Experience deploying and maintaining containerised applications including both custom projects and publicly available images.',
              title: 'Docker/Kubernetes'
            },
            msAzure: {
              description: 'Experience maintaining the cloud infrastructure for production applications, including creating and updating services, monitoring hosted applications, and provisioning cloud resources with terraform using infrastructure as services.',
              title: 'Microsoft Azure'
            },
          },
          title: 'Cloud & Infrastructure'
        },
        devOpsAndTooling: {
          skills: {
            devOpsAndSourceControl: {
              description: 'Working with Azure DevOps for boards, backlogs, sprint planning and CI/CD pipelines; with GitHub for personal projects with workflow automation and releases; and with Git across both platforms for repository management, branching, pull requests and code reviews.',
              title: 'Azure DevOps, Git, GitHub'
            },
            aiAndAutomation: {
              description: 'Professional and personal experience across work and personal projects; used GitHub Copilot and other LLMs (Claude, GPT) to accelerate prototyping, generate test/config scaffolds and automate routine tasks, with manual review and final ownership.',
              title: 'AI & Automation'
            }
          },
          title: 'DevOps & Tooling'
        },
        frontendDevelopment: {
          skills: {
            angular: {
              description: 'Personal experience across multiple personal projects; familiar with component architecture, routing, services, guards, and more.',
              title: 'Angular'
            },
            react: {
              description: 'Professional experience building component-based UIs, writing unit tests and developing a reusable visualisation library.',
              title: 'React'
            },
            others: {
              description: 'Used across different frameworks to build UI tools and interactive applications.',
              title: 'Javascript/TypeScript, CSS/SCSS'
            }
          },
          title: 'Frontend Development'
        }
      },
      title: 'Technical Skills'
    }
  },
  environments: {
    Alpha: 'Alpha',
    Beta: 'Beta'
  },
  errorPage: {
    forbidden: 'You do not have permission to access this page.',
    notFound: 'Looks like the page you were looking for doesn\'t exist or the link is broken.',
    genericError: 'Something went wrong on our end. Please try again later.'
  },
  homePage: {
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
    },
    title: 'Welcome to My Portfolio!'
  },
  languageMenu: {
    options: {
      caES: 'Catalan',
      enGB: 'English',
      esES: 'Spanish',
      paPK: 'Punjabi',
      urPK: 'Urdu'
    },
    title: 'Language'
  },
  navigationButtons: {
    about: 'About',
    curriculum: 'Curriculum',
    home: 'Home',
    projects: 'Projects'
  },
  pages: {
    About: 'About',
    Curriculum: 'Curriculum Vitae',
    Home: 'Home',
    Projects: 'Projects'
  },
  portfolio: 'Portfolio',
  projects: {
    adminCommands: {
      description: 'A batch script with a collection of commands for easier access. Commands such as enabling the local administrator account to extract all the information related to the device and others.',
      subtitle: 'Personal Project',
      title: 'Administrative Commands (Deprecated)'
    },
    agentChatBot: {
      description: 'A simple chatbot agent built using SWI Prolog which responds with a recommendation using recursive search based on the input sentence. The agent will reply with an action to take based first on the best match using simple rules.',
      subtitle: 'Artificial Intelligence - 2nd Year Module',
      title: 'Agent Chatbot'
    },
    angularI18n: {
      description: 'An Angular i18n library with type-safe translation keys and reactive language switching so the UI updates instantly across the application. Supports interpolation and pluralisation, language persistence, fallback translations, and optional lazy-loading of language packs for smaller initial bundles.',
      subtitle: 'Personal Project',
      title: 'Angular Library - i18n'
    },
    bbisa: {
      description: 'Final year project built using Angular and ASP.NET Core. It allows users to track a beer bottle inventory by adding their details. The user can log orders and history of the sales which impact the stock amount of a product.',
      subtitle: 'Honours Stage Project',
      title: 'Beer Bottle Inventory System App'
    },
    dataMining: {
      description: 'This Data Mining project analyses a medical history dataset using different algorithms to predict how patients are more at risk depending on their diseases. Built using Python and Jupyter Notebook.',
      subtitle: 'Data Mining and Decision Systems - 3rd Year Module',
      title: 'Medical Data Analysis'
    },
    distributedSystems: {
      description: 'ASP.NET Core Web API project with endpoints for various cryptographic functions using symmetric and asymmetric encryption. Uses claims-based authorization and Entity Framework Core.',
      subtitle: 'Distributed Systems Programming - 3rd year module',
      title: 'API and Client Development'
    },
    fileExplorer: {
      description:'A modern file explorer used to manage my network drives remotely. Allows me to add, edit or delete files, update their location and even share content. Client built using Angular and backend built using ASP.NET Core running in a Docker container.',
      subtitle: 'Personal Project',
      title: 'File Explorer (Alpha)'
    },
    jumble: {
      description: 'A mobile app game built using Android Studio (Java) which allows the user to complete a list of images available on the internet. The player has to finish the puzzle with the fewest moves and can store their score to share with other players.',
      subtitle: 'Mobile Development and Devices - 3rd Year Module',
      title: 'Jumble!'
    },
    mediaPlay: {
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, quo voluptates? Quas placeat fugiat libero eveniet saepe et minima veniam quisquam doloremque. Quia esse autem fugit odio tenetur saepe delectus.',
      subtitle: 'Personal Project',
      title: 'MediaPlay'
    },
    myList: {
      description: 'A web application that allows users to track the series and movies they are watching. They can add a series and update the episode number and minute where they last left off. The project is developed using Angular and ASP.NET Core.',
      subtitle: 'Personal Project',
      title: 'MyList (Beta)'
    },
    networking: {
      description: 'A client developed using C# and WPF, which sends requests to the server built in WPF with different HTTP Protocols including \'Whois\' and HTTP 0.9 - 1.1.',
      subtitle: 'Networking and User Interface Design - 2nd Year Module',
      title: 'Networking and UI Design'
    },
    passport: {
      description: 'A centralised identity and access platform powering all my personal applications. It provides secure authentication, account management and consistent access control across projects, while also supporting project-specific access requests and admin approval workflows. Acting as a shared OAuth2/OpenID Connect SSO provider for projects like File Explorer, MyList and the home page, it lets all my projects rely on one trusted, scalable authentication system instead of re-implementing security for each one. Built with ASP.NET Core 10, Duende IdentityServer, Entity Framework Core, SQL Server and Angular 21, and deployed in a Docker container.',
      subtitle: 'Personal Project',
      title: 'SKhalidQ Passport'
    },
    webTech: {
      description: 'A website built using HTML, CSS and PHP which allows tracking a student or staff\' location by storing all the data in a SQL Database.',
      subtitle: 'Information Systems and Web Technologies - 2nd Year Module',
      title: 'Web Location Interface Design'
    },
  },
  projectCard: {
    packageTooltip: 'NPM package link',
    privateRepoTooltip: 'Available at request',
    repoTooltip: 'GitHub repository link',
    unavailableWebsiteTooltip: 'Site unavailable',
    websiteTooltip: 'View site',
    readMore: 'Read More',
    readLess: 'Read Less'
  },
  projectsPage: {
    filter: 'Filter by Project Type',
    noProjectsError: 'There seems to be a problem while getting all the data.',
    ProjectTypeFilter: {
      All: 'All',
      PersonalProject: 'Personal Projects',
      UniversityProject: 'University Projects',
      WorkProject: 'Work Projects'
    },
    visitSite: 'Visit Site'
  },
  themeMenu: {
    options: {
      DarkMode: 'Dark Mode',
      LightMode: 'Light Mode',
      SystemDefault: 'System Default'
    },
    title: 'Theme'
  },
  snackbar: {
    connectionRestored: 'Connection restored',
    copiedToClipboard: 'Copied to clipboard',
    dismiss: 'Dismiss',
    languageChanged: 'Language changed to {0}',
    themeChanged: 'Theme changed to {0}',
  },
};
