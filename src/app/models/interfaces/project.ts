import { ProjectType } from '../enums/project-type';

export interface Project {
  title: string;
  subtitle: string;
  icon: string;
  projectType: ProjectType;
  imagePath: string;
  description: string;
  hasWebsite: boolean;
  websiteUrl?: string | null;
  isRepoPublic: boolean;
  hasPublishedPackage: boolean;
  packageType?: 'npm' | 'nuget';
  packageUrl?: string;
  githubUrl?: string;
  isHidden: boolean;
}
