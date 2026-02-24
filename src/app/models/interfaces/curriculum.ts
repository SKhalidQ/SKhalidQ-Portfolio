export interface Curriculum {
  header: Header;
  profile: Profile;
  employment: {
    title: string;
    history: History[];
  };
  education: {
    title: string;
    education: History[];
  };
  technicalSkills: {
    title: string;
    skills: TechnicalSkill[];
  };
  extendedTechnicalSkills: {
    title: string;
    skills: ExtendedBulletPoints[];
  };
  nonTechnicalSkills: {
    title: string;
    skills: BulletPoints[];
  };
  achievements: {
    title: string;
    achievements: BulletPoints[];
  };
  hobbies: {
    title: string;
    hobbies: Hobbies[];
  };
}

export interface Profile {
  title: string;
  description: string;
}

export interface Header {
  name: string;
  title: string;
  logoImagePath: string;
  contactDetails: {
    contact: string;
    icon: string;
  }[];
}
export interface History {
  dates: string;
  title: string;
  description: string;
}

export interface TechnicalSkill {
  title: string;
  percentage: number;
}

export interface BulletPoints {
  title: string;
  year?: string;
  description: string;
}

export interface ExtendedBulletPoints {
  sectionTitle: string;
  points: BulletPoints[];
}

export interface Hobbies {
  name: string;
  icon: string;
}
