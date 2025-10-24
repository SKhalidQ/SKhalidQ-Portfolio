import { ProjectType } from '../enums/project-type';

export interface Project {
  title: string;
  subtitle: string;
  icon: string;
  projectType: ProjectType;
  imagePath: string;
  description: string;
  hasWebsite: boolean;
  websiteUrl?: string;
  isRepoPublic: boolean;
  canReadMore: boolean;
  readMoreUrl?: string;
  githubUrl?: string;
  isHidden: boolean;
}
