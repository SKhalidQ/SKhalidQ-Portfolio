import { BulletPoints, Curriculum, History, Header, Hobbies, Profile, TechnicalSkill, ExtendedBulletPoints } from '../interfaces/curriculum';

const header: Header = {
  name: 'curriculumPage.header.name',
  title: 'curriculumPage.header.title',
  logoImagePath: './assets/images/logos/group_logo.svg',
  contactDetails: [{
    contact: 'SKhalidQDev@outlook.es',
    icon: 'mail'
  },
  {
    contact: 'skhalidq.dev',
    icon: 'web'
  }]
};

const profile: Profile = {
  title: 'curriculumPage.profile.title',
  description: 'curriculumPage.profile.description',
  // Tempting:
  // description: 'A passionate and dedicated Full Stack Developer with a strong foundation in computer science and a keen interest in web development. Experienced in building robust and scalable applications using modern technologies. Eager to contribute my skills and knowledge to a dynamic team while continuously learning and growing in the field.'
};

const employmentHistory: History[] = [
  {
    dates: 'curriculumPage.employmentHistory.jobs.weatherford.dates',
    title: 'curriculumPage.employmentHistory.jobs.weatherford.title',
    description: 'curriculumPage.employmentHistory.jobs.weatherford.description'
  },
  {
    dates: 'curriculumPage.employmentHistory.jobs.greenwood.dates',
    title: 'curriculumPage.employmentHistory.jobs.greenwood.title',
    description: 'curriculumPage.employmentHistory.jobs.greenwood.description'
  },
  {
    dates: 'curriculumPage.employmentHistory.jobs.homeFundraising.dates',
    title: 'curriculumPage.employmentHistory.jobs.homeFundraising.title',
    description: 'curriculumPage.employmentHistory.jobs.homeFundraising.description'
  }
];

const education: History[] = [
  {
    dates: '2017 - 2020',
    title: 'curriculumPage.educationHistory.institutions.university.title',
    description: 'curriculumPage.educationHistory.institutions.university.description'
  },
  {
    dates: '2012 - 2016',
    title: 'curriculumPage.educationHistory.institutions.academy.title',
    description: 'curriculumPage.educationHistory.institutions.academy.description'
  }
];

const technicalSkill: TechnicalSkill[] = [
  {
    title: 'C#/.NET',
    percentage: 90
  },
  {
    title: 'ASP.NET Core',
    percentage: 80
  },
  {
    title: 'Entity Framework Core',
    percentage: 90
  },
  {
    title: 'Angular',
    percentage: 90
  },
  {
    title: 'TypeScript',
    percentage: 70
  },
  {
    title: 'SQL',
    percentage: 80
  },
  {
    title: 'Azure',
    percentage: 60
  },
  {
    title: 'HTML/CSS',
    percentage: 90
  },
  {
    title: 'Docker/Kubernetes',
    percentage: 60
  },
  {
    title: 'NGINX',
    percentage: 60
  },
  {
    title: 'Git',
    percentage: 75
  }
];

const extendedTechnicalSkills: ExtendedBulletPoints[] = [
  {
    sectionTitle: 'Backend Development',
    points: [
      {
        title: 'C#/.Net, ASP.NET Core, Entity Framework',
        description: 'Extensive professional experience building APIs, UI applications, and console tools, applying OOP principles, dependency injection, and common design patterns, along with writing automated tests using NUnit.'
      },
      {
        title: 'SQL',
        description: 'Strong experience designing relational models, writing queries, and working with production databases.'
      }
    ]
  },
  {
    sectionTitle: 'Frontend Development',
    points: [
      {
        title: 'Angular',
        description: 'Personal experience across multiple personal projects; familiar with component architecture, routing, services, guards, and more.'
      },
      {
        title: 'React',
        description: 'Professional experience building component-based UIs, writing unit tests and developing a reusable visualisation library.'
      },
      {
        title: 'Javascript/TypeScript, CSS/SCSS',
        description: 'Used across different frameworks to build UI tools and interactive applications.'
      }
    ]
  },
  {
    sectionTitle: 'Cloud & Infrastructure',
    points: [
      {
        title: 'Microsoft Azure',
        description: 'Experience maintaining the cloud infrastructure for production applications, including creating and updating services, monitoring hosted applications, and provisioning cloud resources with terraform using infrastructure as services.'
      },
      {
        title: 'Docker/Kubernetes',
        description: 'Experience deploying and maintaining containerised applications including both custom projects and publicly available images.'
      }
    ]
  },
  {
    sectionTitle: 'DevOps & Tooling',
    points: [
      {
        title: 'Azure DevOps, Git, GitHub',
        description: 'Working with Azure DevOps for boards, backlogs, sprint planning and CI/CD pipelines; with GitHub for personal projects with workflow automation and releases; and with Git across both platforms for repository management, branching, pull requests and code reviews.'
      }
    ]
  }
];

const nonTechnicalSkill: BulletPoints[] = [
  {
    title: 'curriculumPage.nonTechnicalSkills.skills.teamwork.title',
    description: 'curriculumPage.nonTechnicalSkills.skills.teamwork.description'
  },
  {
    title: 'curriculumPage.nonTechnicalSkills.skills.communication.title',
    description: 'curriculumPage.nonTechnicalSkills.skills.communication.description'
  },
  {
    title: 'curriculumPage.nonTechnicalSkills.skills.organisation.title',
    description: 'curriculumPage.nonTechnicalSkills.skills.organisation.description'
  }
];

const achievement: BulletPoints[] = [
  {
    title: 'curriculumPage.achievements.list.azureFundamentals.title',
    year: 'curriculumPage.achievements.list.azureFundamentals.year',
    description: 'curriculumPage.achievements.list.azureFundamentals.description'
  }
];

const hobbies: Hobbies[] = [
  {
    name: 'curriculumPage.hobbies.hobbies.movies',
    icon: 'video_library'
  },
  {
    name: 'curriculumPage.hobbies.hobbies.gaming',
    icon: 'sports_esports'
  },
  {
    name: 'curriculumPage.hobbies.hobbies.music',
    icon: 'library_music'
  },
  {
    name: 'curriculumPage.hobbies.hobbies.videoEditing',
    icon: 'movie_creation'
  },
  {
    name: 'curriculumPage.hobbies.hobbies.code',
    icon: 'code'
  },
  {
    name: 'curriculumPage.hobbies.hobbies.fitness',
    icon: 'fitness_center'
  }
];

export const CurriculumInfo: Curriculum = {
  header: header,
  profile: profile,
  employment: {
    title: 'curriculumPage.employmentHistory.title',
    history: employmentHistory
  },
  education: {
    title: 'curriculumPage.educationHistory.title',
    education: education
  },
  technicalSkills: {
    title: 'curriculumPage.technicalSkills.title',
    skills: technicalSkill
  },
  extendedTechnicalSkills: {
    title: 'curriculumPage.technicalSkills.title',
    skills: extendedTechnicalSkills
  },
  nonTechnicalSkills: {
    title: 'curriculumPage.nonTechnicalSkills.title',
    skills: nonTechnicalSkill
  },
  achievements: {
    title: 'curriculumPage.achievements.title',
    achievements: achievement
  },
  hobbies: {
    title: 'curriculumPage.hobbies.title',
    hobbies: hobbies
  }
};
