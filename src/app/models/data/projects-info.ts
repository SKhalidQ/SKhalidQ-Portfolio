import { ProjectType } from '../enums/project-type';
import { Project } from '../interfaces/project';

// https://4kwallpapers.com/images/wallpapers/windows-11-dark-mode-blue-stock-official-1920x1080-5630.jpg

const MediaPlay: Project = {
  title: 'projects.mediaPlay.title',
  subtitle: 'projects.mediaPlay.subtitle',
  icon: 'play_arrow',
  projectType: ProjectType.PersonalProject,
  imagePath: './assets/images/projects/coming-soon/ComingSoon v2.png',
  description: 'projects.mediaPlay.description',
  hasWebsite: true,
  websiteUrl: undefined,
  isRepoPublic: false,
  githubUrl: undefined,
  isHidden: true
};

const AngularI18n: Project = {
  title: 'projects.angularI18n.title',
  subtitle: 'projects.angularI18n.subtitle',
  icon: 'translate',
  projectType: ProjectType.PersonalProject,
  imagePath: './assets/images/projects/coming-soon/ComingSoon v2.png',
  description: 'projects.angularI18n.description',
  hasWebsite: true,
  websiteUrl: 'https://i18n-demo.skhalidq.dev/',
  isRepoPublic: false,
  githubUrl: undefined,
  isHidden: false
};

const FileExplorer: Project = {
  title: 'projects.fileExplorer.title',
  subtitle: 'projects.fileExplorer.subtitle',
  icon: 'folder',
  projectType: ProjectType.PersonalProject,
  imagePath: './assets/images/projects/coming-soon/ComingSoon v2.png',
  description:'projects.fileExplorer.description',
  hasWebsite: true,
  websiteUrl: 'https://alpha-explorer.skhalidq.dev/',
  isRepoPublic: false,
  githubUrl: undefined,
  isHidden: false
};

const MyList: Project = {
  title: 'projects.myList.title',
  subtitle: 'projects.myList.subtitle',
  icon: 'list',
  projectType: ProjectType.PersonalProject,
  imagePath: './assets/images/projects/MyListPreview.png',
  description: 'projects.myList.description',
  hasWebsite: true,
  websiteUrl: 'https://beta-myList.skhalidq.dev/',
  isRepoPublic: false,
  githubUrl: 'https://github.com/user/project1',
  isHidden: false
};

const AdminCommands: Project = {
  title: 'projects.adminCommands.title',
  subtitle: 'projects.adminCommands.subtitle',
  icon: 'description',
  projectType: ProjectType.PersonalProject,
  imagePath: './assets/images/projects/AdminCommandsPreview.png',
  description: 'projects.adminCommands.description',
  hasWebsite: false,
  isRepoPublic: true,
  githubUrl: 'https://github.com/SKhalidQ/Comandos-Administrativos',
  isHidden: false
};

const BBISA: Project = {
  title: 'projects.bbisa.title',
  subtitle: 'projects.bbisa.subtitle',
  icon: 'sports_bar',
  projectType: ProjectType.UniversityProject,
  imagePath: '../../assets/images/projects/BBISAPreview.png',
  description: 'projects.bbisa.description',
  hasWebsite: true,
  websiteUrl: 'https://bbis.skhalidq.dev/Home',
  isRepoPublic: true,
  githubUrl: 'https://github.com/SKhalidQ/',
  isHidden: false
};

const DistributedSystems: Project = {
  title: 'projects.distributedSystems.title',
  subtitle: 'projects.distributedSystems.subtitle',
  icon: 'code',
  projectType: ProjectType.UniversityProject,
  imagePath: '../../assets/images/projects/DistributedPreview.png',
  description: 'projects.distributedSystems.description',
  hasWebsite: false,
  websiteUrl: '',
  isRepoPublic: false,
  githubUrl: 'https://github.com/SKhalidQ/Distributed-RESTful-API',
  isHidden: false
};

const Jumble: Project = {
  title: 'projects.jumble.title',
  subtitle: 'projects.jumble.subtitle',
  icon: 'extension',
  projectType: ProjectType.UniversityProject,
  imagePath: '../../assets/images/projects/JumblePreview.png',
  description: 'projects.jumble.description',
  hasWebsite: false,
  websiteUrl: '',
  isRepoPublic: true,
  githubUrl: 'https://github.com/SKhalidQ/Jumble-Mobile-App',
  isHidden: false
};

const DataMining: Project = {
  title: 'projects.dataMining.title',
  subtitle: 'projects.dataMining.subtitle',
  icon: 'analytics',
  projectType: ProjectType.UniversityProject,
  imagePath: '../../assets/images/projects/DataMiningPreview.png',
  description: 'projects.dataMining.description',
  hasWebsite: false,
  websiteUrl: '',
  isRepoPublic: true,
  githubUrl: 'https://github.com/SKhalidQ/Medical-Data-Analysis',
  isHidden: false
};

const Networking: Project = {
  title: 'projects.networking.title',
  subtitle: 'projects.networking.subtitle',
  icon: 'router',
  projectType: ProjectType.UniversityProject,
  imagePath: '../../assets/images/projects/NetworkingPreview.png',
  description: 'projects.networking.description',
  hasWebsite: false,
  websiteUrl: '',
  isRepoPublic: true,
  githubUrl: 'https://github.com/SKhalidQ/Networking',
  isHidden: false
};

const WebTech: Project = {
  title: 'projects.webTech.title',
  subtitle: 'projects.webTech.subtitle',
  icon: 'place',
  projectType: ProjectType.UniversityProject,
  imagePath: '../../assets/images/projects/WebTechPreview.png',
  description: 'projects.webTech.description',
  hasWebsite: true,
  websiteUrl: 'https://wt-location.skhalidq.dev/',
  isRepoPublic: true,
  githubUrl: 'https://github.com/SKhalidQ/WT-Location-Website',
  isHidden: false
};

const AgentChatBot: Project = {
  title: 'projects.agentChatBot.title',
  subtitle: 'projects.agentChatBot.subtitle',
  icon: 'insert_comment',
  projectType: ProjectType.UniversityProject,
  imagePath: '../../assets/images/projects/AIPreview.png',
  description: 'projects.agentChatBot.description',
  hasWebsite: false,
  websiteUrl: '',
  isRepoPublic: true,
  githubUrl: 'https://github.com/SKhalidQ/Artificial-Intelligence',
  isHidden: false
};

export const Projects: Project[] = [
  MediaPlay,
  AngularI18n,
  FileExplorer,
  MyList,
  AdminCommands,
  BBISA,
  DistributedSystems,
  Jumble,
  DataMining,
  Networking,
  WebTech,
  AgentChatBot
];
