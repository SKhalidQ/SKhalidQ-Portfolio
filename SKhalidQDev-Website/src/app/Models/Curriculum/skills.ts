export interface TechnicalSkillsModel {
    Name: string;
    Percentage: string;
}

export interface NonTechSkillsModel {
    Skill: string;
    Description: string;
}

export const TechnicalSkills: TechnicalSkillsModel[] = [
    { Name: 'C#/.NET', Percentage: '95%' },
    { Name: 'Java', Percentage: '70%' },
    // { Name: 'C++', Percentage: '50%' },
    { Name: 'Python', Percentage: '85%' },
    // { Name: 'Prolog', Percentage: '95%' },
    { Name: 'ASP.NET Core', Percentage: '75%' },
    { Name: 'Entity Fr.', Percentage: '90%' },
    { Name: 'Angular', Percentage: '80%' },
    { Name: 'Typescript', Percentage: '75%' },
    { Name: 'UWP', Percentage: '75%' },
    { Name: 'SQL', Percentage: '80%' },
    { Name: 'GitHub', Percentage: '100%' },
];
