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
