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

interface CVTitlesModel {
    Profile: string;
    WorkExp: string;
    Education: string;
    Hobbies: string;
    Skills: string;
}

interface CurriculumModel {
    CVTitles: CVTitlesModel[];
    Skills: TechnicalSkillsModel[];
    Languages: LanguagesModel[];
    Education: EducationModel[];
    Jobs: EmploymentModel[];
    Hobbies: string[];
}

export const CVTItlesEng: CVTitlesModel[] = [
    {
        Profile: 'Profile',
        WorkExp: 'Employment History',
        Education: 'Education',
        Hobbies: 'Hobbies',
        Skills: 'Technical Skills'
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
      Modules: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!"
    },
    {
      Year: "2012 - 2016",
      Qualification: "Nottingham Academy",
      Modules: "A-Level Spanish and BTEC Level 3 Diploma in Business,\n5 GCSEs Inc. Maths and English, 3 BTECs Inc. Science"
    },
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
        Hobbies: Hobbies
    }
];