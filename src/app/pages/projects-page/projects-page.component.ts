import { Component, inject, OnInit } from '@angular/core';
import { Animations } from 'src/app/app.animations';
import { Projects } from 'src/app/models/data/projects-info';
import { Page } from 'src/app/models/enums/page';
import { Project } from 'src/app/models/interfaces/project';
import { ActivePageService } from 'src/app/services/active-page/active-page.service';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { TranslationService } from 'src/app/services/translation/translation.service';

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
/**
 * @description
 * Page component for the Projects section.
 * Renders a filterable grid of project cards.
 * Supports filtering by project type using a chip/select control,
 * and hides projects flagged as hidden in the data model.
 */
export class ProjectsPageComponent implements OnInit {
  private readonly activePageService = inject(ActivePageService);
  private readonly translationService = inject(TranslationService);
  public readonly themeService = inject(ThemeService);

  /** Full unfiltered project list from the static data model. */
  private readonly allProjects: Project[] = Projects;
  /** The currently selected project type filter. Defaults to showing all. */
  selectedProjectType = ProjectTypeFilter.All;

  /** Ordered list of filter values to render as filter options in the template. */
  readonly projectTypes = [
    ProjectTypeFilter.All,
    ProjectTypeFilter.WorkProject,
    ProjectTypeFilter.PersonalProject,
    ProjectTypeFilter.UniversityProject
  ];

  /**
   * @description Sets the active page key so the header bottom bar reflects the Projects page.
   * @returns {void}
   */
  ngOnInit(): void {
    this.activePageService.activePage.next(`pages.${Page[Page.Projects]}`);
  }

  /**
   * @description
   * Returns the visible subset of projects matching the selected filter.
   * Always excludes projects with `isHidden = true`.
   * @returns {Project[]} An array of {@link Project} objects to render.
   */
  get filteredProjects(): Project[] {
    return this.selectedProjectType === ProjectTypeFilter.All
      ? this.allProjects.filter(p => !p.isHidden)
      : this.allProjects.filter(p => (p.projectType as number) === this.selectedProjectType && !p.isHidden);
  }

  /**
   * @description Resolves the translation key for a project type filter label.
   * @param {ProjectTypeFilter} type - The {@link ProjectTypeFilter} value to label.
   * @returns {string} A dot-notation translation key string.
   */
  projectTypeLabel(type: ProjectTypeFilter): string {
    return `projectsPage.ProjectTypeFilter.${ProjectTypeFilter[type]}`;
  }

  /**
   * @description Returns the translated error message shown when no projects match the filter.
   * @returns {string} Translated error string.
   */
  get errorMessage(): string {
    return this.translationService.getText('projectsPage.noProjectsError');
  }

  /**
   * @description
   * Determines whether a project type filter option should be disabled.
   * The `All` option is never disabled. Other types are disabled when no
   * visible projects of that type exist in the data.
   * @param {ProjectTypeFilter} type - The {@link ProjectTypeFilter} to evaluate.
   * @returns {boolean} `true` if the filter option should be disabled.
   */
  isTypeDisabled(type: ProjectTypeFilter): boolean {
    if (type === ProjectTypeFilter.All) {
      return false;
    }

    return !this.allProjects.some(p => (p.projectType as number) === type);
  }
}
