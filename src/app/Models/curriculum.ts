import { TechnicalSkillsModel, NonTechSkillsModel } from './Curriculum/skills';
import { EmploymentModel } from './Curriculum/employment';
import { EducationModel } from './Curriculum/education';
import { LanguagesModel } from './Curriculum/languages';
import { CVTitlesModel } from './Curriculum/titles';
import { HobbiesModel } from './Curriculum/hobbies';

import TechnicalSkillsData from '../../assets/JSON/English/CV/CVTechnicalSkills.json';
import NonTechSkillsData from '../../assets/JSON/English/CV/CVNonTechSkills.json';
import AchievementsData from '../../assets/JSON/English/CV/CVAchievements.json';
import EmploymentData from '../../assets/JSON/English/CV/CVEmployment.json';
import EducationData from '../../assets/JSON/English/CV/CVEducation.json';
import LanguagesData from '../../assets/JSON/English/CV/CVLanguages.json';
import HobbiesData from '../../assets/JSON/English/CV/CVHobbies.json';
import ProfileData from '../../assets/JSON/English/CV/CVProfile.json';
import TitlesData from '../../assets/JSON/English/CV/CVTitles.json';

import NonTechSkillsCast from '../../assets/JSON/Castellano/CV/CVNonTechSkills.json'
import TechnicalCast from '../../assets/JSON/Castellano/CV/CVTechnicalSkills.json'
import AchievementsCast from '../../assets/JSON/Castellano/CV/CVAchievements.json'
import EmploymentCast from '../../assets/JSON/Castellano/CV/CVEmployment.json'
import LanguagesCast from '../../assets/JSON/Castellano/CV/CVLanguages.json'
import EducationCast from '../../assets/JSON/Castellano/CV/CVEducation.json'
import ProfileCast from '../../assets/JSON/Castellano/CV/CVProfile.json'
import HobbiesCast from '../../assets/JSON/Castellano/CV/CVHobbies.json'
import TitlesCast from '../../assets/JSON/Castellano/CV/CVTitles.json'

export interface CurriculumModel {
    CVTitles: CVTitlesModel[];
    Profile: string[];
    Skills: TechnicalSkillsModel[];
    Languages: LanguagesModel[];
    Education: EducationModel[];
    Jobs: EmploymentModel[];
    NonTechSkills: NonTechSkillsModel[];
    Achievements: string[];
    Hobbies: HobbiesModel[];
}

export const CurriculumEng: CurriculumModel[] = [
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

export const CurriculumCast: CurriculumModel[] = [
    {
        CVTitles: TitlesCast,
        Profile: ProfileCast,
        Skills: TechnicalCast,
        Languages: LanguagesCast,
        Education: EducationCast,
        Jobs: EmploymentCast,
        NonTechSkills: NonTechSkillsCast,
        Achievements: AchievementsCast,
        Hobbies: HobbiesCast
    }
];