import { SkipSelf } from '@angular/core';

interface TechnicalSkillsModel {
    Name: string;
    Percentage: string;
}

interface LanguagesModel {
    Language: string;
    Percentage: string;
}

interface EducationModel {
    Year: string;
    Qualification: string;
    Modules: string;
}
  
interface EmploymentModel {
    Year: string;
    JobTitle: string;
    JobDescription: string;
}

interface NonTechSkillsModel {
    Skill: string;
    Description: string;
}

interface CVTitlesModel {
    Profile: string;
    WorkExp: string;
    Education: string;
    NonTechSkills: string;
    Hobbies: string;
    Skills: string;
    Achievements: string;
}

interface CurriculumModel {
    CVTitles: CVTitlesModel[];
    Skills: TechnicalSkillsModel[];
    Languages: LanguagesModel[];
    Education: EducationModel[];
    Jobs: EmploymentModel[];
    NonTechSkills: NonTechSkillsModel[],
    Achievements: string[];
    Hobbies: string[];
}

export const CVTItlesEng: CVTitlesModel[] = [
    {
        Profile: 'Profile',
        WorkExp: 'Employment History',
        Education: 'Education',
        NonTechSkills: 'Non-Technical Skills',
        Hobbies: 'Hobbies',
        Skills: 'Technical Skills',
        Achievements: 'Achievements'
    }
];
  
export const TechnicalSkills: TechnicalSkillsModel[] = [
    { Name: "C#/.NET", Percentage: "95%" },
    { Name: "Java", Percentage: "70%" },
    // { Name: "C++", Percentage: "50%" },
    { Name: "Python", Percentage: "85%" },
    // { Name: "Prolog", Percentage: "95%" },
    { Name: "ASP.NET Core", Percentage: "75%" },
    { Name: "Entity Fr.", Percentage: "90%" },
    { Name: "Angular", Percentage: "80%" },
    { Name: "Typescript", Percentage: "75%" },
    { Name: "UWP", Percentage: "75%" },
    { Name: "SQL", Percentage: "80%" },
    { Name: "GitHub", Percentage: "100%" },
];
  
export const LanguagesEng: LanguagesModel[] = [
    { Language: "English", Percentage: "100%" },
    { Language: "Spanish", Percentage: "100%" },
    { Language: "Catalan", Percentage: "90%" },
    { Language: "Urdu", Percentage: "95%" },
    { Language: "Punjabi", Percentage: "95%" },
];

export const EmploymentEng: EmploymentModel[] = [
    {
        Year: "Feb 2017",
        JobTitle: "Door to Door Fundraiser - Home Fundraising",
        JobDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!"
    },
    {
        Year: "June - Sep 2017",
        JobTitle: "IT Support Technician - Greenwood Academies Trust",
        JobDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!"
    },
];
  
export const EducationEng: EducationModel[] = [
    {
      Year: "2017 - 2020",
      Qualification: "Computer Science - University of Hull",
      Modules: "Modules list / Transcript available on request."
    },
    {
      Year: "2012 - 2016",
      Qualification: "Nottingham Academy",
      Modules: "A-Level Spanish and BTEC Level 3 Diploma in Business,\n5 GCSEs Inc. Maths and English, 3 BTECs Inc. Science"
    },
];

export const NonTechSkills: NonTechSkillsModel[] = [
    {
        Skill: 'Team Work',
        Description: 'Worked in a fast-paced, technical environment at Greenwood Academies Trust as an IT technician, which involved ' +
        'collaborating with the team on solving critical situations. Undertook multiple group work projects during my education and ' + 
        'overcame challenges by cooperating with the team to achieve the objectives.'
    },
    {
        Skill: 'Communication',
        Description: 'Provided friendly, helpful support service and communicated with peers whilst working as an IT Technician. ' + 
        'Helped raise awareness of a charity as a fundraiser. Presented technical information clearly and concisely for ' + 
        'university presentations. Participated in plays to the public at college'
    },
];

export const Achievements: string[] = [
    'Able to speak 5 different languages inc. English.',
];
  
export const Hobbies: string[] = [
    'movie_creation',
    'sports_esports',
    'library_music',
    'code',
    'fitness_center',
];
  
export const Curriculum: CurriculumModel[] = [
    {
        CVTitles: CVTItlesEng,
        Skills: TechnicalSkills,
        Languages: LanguagesEng,
        Education: EducationEng,
        Jobs: EmploymentEng,
        NonTechSkills: NonTechSkills,
        Achievements: Achievements,
        Hobbies: Hobbies
    }
];