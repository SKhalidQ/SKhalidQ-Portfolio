import { BulletPoints, Curriculum, History, Header, Hobbies, Profile, TechnicalSkill } from '../interfaces/curriculum';

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
    dates: 'curriculumPage.educationHistory.institutions.university.dates',
    title: 'curriculumPage.educationHistory.institutions.university.title',
    description: 'curriculumPage.educationHistory.institutions.university.description'
  },
  {
    dates: 'curriculumPage.educationHistory.institutions.academy.dates',
    title: 'curriculumPage.educationHistory.institutions.academy.title',
    description: 'curriculumPage.educationHistory.institutions.academy.description'
  }
];

const technicalSkill: TechnicalSkill[] = [
  {
    title: 'curriculumPage.technicalSkills.sections.backendDevelopment.title',
    skills: [
      {
        title: 'curriculumPage.technicalSkills.sections.backendDevelopment.skills.dotNet.title',
        description: 'curriculumPage.technicalSkills.sections.backendDevelopment.skills.dotNet.description'
      },
      {
        title: 'curriculumPage.technicalSkills.sections.backendDevelopment.skills.sql.title',
        description: 'curriculumPage.technicalSkills.sections.backendDevelopment.skills.sql.description'
      }
    ]
  },
  {
    title: 'curriculumPage.technicalSkills.sections.frontendDevelopment.title',
    skills: [
      {
        title: 'curriculumPage.technicalSkills.sections.frontendDevelopment.skills.angular.title',
        description: 'curriculumPage.technicalSkills.sections.frontendDevelopment.skills.angular.description'
      },
      {
        title: 'curriculumPage.technicalSkills.sections.frontendDevelopment.skills.react.title',
        description: 'curriculumPage.technicalSkills.sections.frontendDevelopment.skills.react.description'
      },
      {
        title: 'curriculumPage.technicalSkills.sections.frontendDevelopment.skills.others.title',
        description: 'curriculumPage.technicalSkills.sections.frontendDevelopment.skills.others.description'
      }
    ]
  },
  {
    title: 'curriculumPage.technicalSkills.sections.cloudAndInfrastructure.title',
    skills: [
      {
        title: 'curriculumPage.technicalSkills.sections.cloudAndInfrastructure.skills.msAzure.title',
        description: 'curriculumPage.technicalSkills.sections.cloudAndInfrastructure.skills.msAzure.description'
      },
      {
        title: 'curriculumPage.technicalSkills.sections.cloudAndInfrastructure.skills.docker.title',
        description: 'curriculumPage.technicalSkills.sections.cloudAndInfrastructure.skills.docker.description'
      }
    ]
  },
  {
    title: 'curriculumPage.technicalSkills.sections.devOpsAndTooling.title',
    skills: [
      {
        title: 'curriculumPage.technicalSkills.sections.devOpsAndTooling.skills.devOpsAndSourceControl.title',
        description: 'curriculumPage.technicalSkills.sections.devOpsAndTooling.skills.devOpsAndSourceControl.description'
      }
    ]
  }
];

const achievement: BulletPoints[] = [
  {
    title: 'curriculumPage.achievements.list.azureFundamentals.title',
    year: 'curriculumPage.achievements.list.azureFundamentals.year',
    description: 'curriculumPage.achievements.list.azureFundamentals.description'
  }
];

const language: string[] = [
  'curriculumPage.languages.english',
  'curriculumPage.languages.spanish',
  'curriculumPage.languages.catalan',
  'curriculumPage.languages.urdu',
  'curriculumPage.languages.punjabi'
];

const hobbies: Hobbies[] = [
  {
    name: 'curriculumPage.hobbies.hobbies.badminton',
    icon: 'badminton',
    path: '../../../../assets/images/icons/badminton_24dp.svg'
  },
  {
    name: 'curriculumPage.hobbies.hobbies.fitness',
    icon: 'fitness_center'
  },
  {
    name: 'curriculumPage.hobbies.hobbies.gaming',
    icon: 'sports_esports'
  },
  {
    name: 'curriculumPage.hobbies.hobbies.code',
    icon: 'code'
  },
  {
    name: 'curriculumPage.hobbies.hobbies.designing',
    icon: 'design_services'
  },
  {
    name: 'curriculumPage.hobbies.hobbies.videoEditing',
    icon: 'movie_creation'
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
    sections: technicalSkill
  },
  achievements: {
    title: 'curriculumPage.achievements.title',
    achievements: achievement
  },
  languages: {
    title: 'curriculumPage.languages.title',
    languages: language
  },
  hobbies: {
    title: 'curriculumPage.hobbies.title',
    hobbies: hobbies
  }
};
