import { BulletPoints, Curriculum, History, Header, Hobbies, Profile, TechnicalSkill } from "../interfaces/Curriculum";

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
]

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
