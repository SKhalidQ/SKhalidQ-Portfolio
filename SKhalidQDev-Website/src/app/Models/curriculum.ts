import { TechnicalSkillsModel, NonTechSkillsModel } from './Curriculum/skills';
import { EmploymentModel } from './Curriculum/employment';
import { EducationModel } from './Curriculum/education';
import { LanguagesModel } from './Curriculum/languages';
import { CVTitlesModel } from './Curriculum/titles';

import TechnicalSkillsData from '../../assets/JSON/CV/CVTechnicalSkills.json'
import NonTechSkillsData from '../../assets/JSON/CV/CVNonTechSkills.json'
import AchievementsData from '../../assets/JSON/CV/CVAchievements.json'
import EmploymentData from '../../assets/JSON/CV/CVEmployment.json'
import EducationData from '../../assets/JSON/CV/CVEducation.json'
import LanguagesData from '../../assets/JSON/CV/CVLanguages.json'
import HobbiesData from '../../assets/JSON/CV/CVHobbies.json'
import ProfileData from '../../assets/JSON/CV/CVProfile.json'
import TitlesData from '../../assets/JSON/CV/CVTitles.json'

export interface CurriculumModel {
    CVTitles: CVTitlesModel[];
    Profile: string[];
    Skills: TechnicalSkillsModel[];
    Languages: LanguagesModel[];
    Education: EducationModel[];
    Jobs: EmploymentModel[];
    NonTechSkills: NonTechSkillsModel[];
    Achievements: string[];
    Hobbies: string[];
}

export const Curriculum: CurriculumModel[] = [
    {
        CVTitles: TitlesData,
        Profile: ProfileData,
        Skills: TechnicalSkillsData,
        Languages: LanguagesData,
        Education: EducationData,
        Jobs: EmploymentData,
        NonTechSkills: NonTechSkillsData,
        Achievements: AchievementsData,
        Hobbies: HobbiesData
    }
];
