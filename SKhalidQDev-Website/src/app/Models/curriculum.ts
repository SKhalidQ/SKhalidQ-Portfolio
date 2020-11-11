import { Achievements } from './Curriculum/achievements';
import { CVTitlesModel, CVTitles } from './Curriculum/titles';
import { EducationEng, EducationModel } from './Curriculum/education';
import { EmploymentModel, EmploymentEng } from './Curriculum/employment';
import { TechnicalSkills, TechnicalSkillsModel, NonTechSkillsModel, NonTechSkills } from './Curriculum/skills';
import { LanguagesEng, LanguagesModel } from './Curriculum/languages';
import { Hobbies } from './Curriculum/hobbies';
import { Profile } from './Curriculum/profile';

export interface CurriculumModel {
    CVTitles: CVTitlesModel[];
    Profile: string[];
    Skills: TechnicalSkillsModel[];
    Languages: LanguagesModel[];
    Education: EducationModel[];
    Jobs: EmploymentModel[];
    NonTechSkills: NonTechSkillsModel[],
    Achievements: string[];
    Hobbies: string[];
}

export const Curriculum: CurriculumModel[] = [
    {
        CVTitles: CVTitles,
        Profile: Profile,
        Skills: TechnicalSkills,
        Languages: LanguagesEng,
        Education: EducationEng,
        Jobs: EmploymentEng,
        NonTechSkills: NonTechSkills,
        Achievements: Achievements,
        Hobbies: Hobbies
    }
];