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
    sections: TechnicalSkill[];
  };
  achievements: {
    title: string;
    achievements: BulletPoints[];
  };
  languages: {
    title: string;
    languages: string[];
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

export interface BulletPoints {
  title: string;
  year?: string;
  description: string;
}

export interface TechnicalSkill {
  title: string;
  skills: BulletPoints[];
}

export interface Hobbies {
  name: string;
  icon: string;
  path?: string;
}

