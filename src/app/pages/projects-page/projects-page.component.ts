import { Component, inject, OnInit } from '@angular/core';
import { Animations } from 'src/app/app.animations';
import { Projects } from 'src/app/models/data/Projects';
import { Page } from 'src/app/models/enums/Page';
import { Project } from 'src/app/models/interfaces/Project';
import { ActivePageService } from 'src/app/services/activePage/active-page.service';
import { TranslationService } from 'src/app/services/translation/translation.service';
import { ThemeService } from 'src/app/services/theme/theme.service';

enum ProjectTypeFilter {
  All = -1,
  WorkProject = 0,
  PersonalProject = 1,
  UniversityProject = 2,
}

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
  animations: [Animations.topFadeIn]
})
export class ProjectsPageComponent implements OnInit {
  private readonly activePageService = inject(ActivePageService);
  private readonly translationService = inject(TranslationService);
  public readonly themeService = inject(ThemeService);

  private readonly allProjects: Project[] = Projects;
  selectedProjectType = ProjectTypeFilter.All;

  readonly projectTypes = [
    ProjectTypeFilter.All,
    ProjectTypeFilter.WorkProject,
    ProjectTypeFilter.PersonalProject,
    ProjectTypeFilter.UniversityProject
  ];

  ngOnInit(): void {
    this.activePageService.activePage.next(`pages.${Page[Page.Projects]}`);
  }

  get filteredProjects(): Project[] {
    return this.selectedProjectType === ProjectTypeFilter.All
      ? this.allProjects
      : this.allProjects.filter(p => (p.projectType as number) === this.selectedProjectType);
  }

  projectTypeLabel(type: ProjectTypeFilter): string {
    return `projectsPage.ProjectTypeFilter.${ProjectTypeFilter[type]}`;
  }

  get errorMessage(): string {
    return this.translationService.getTextPath('projectsPage.noProjectsError');
  }

  isTypeDisabled(type: ProjectTypeFilter): boolean {
    if (type === ProjectTypeFilter.All) {
      return false;
    }

    return !this.allProjects.some(p => (p.projectType as number) === type);
  }
}
