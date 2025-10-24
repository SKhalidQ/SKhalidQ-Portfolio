import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Page } from 'src/app/models/enums/page';
import { Project } from 'src/app/models/interfaces/project';
import { ActivePageService } from 'src/app/services/active-page/active-page.service';
import { SelectedProjectService } from 'src/app/services/selected-project/selected-project.service';

@Component({
  selector: 'app-read-more-page',
  templateUrl: './read-more-page.component.html',
  styleUrls: ['./read-more-page.component.scss']
})
export class ReadMorePageComponent implements OnInit, OnDestroy {
  private readonly projectService = inject(SelectedProjectService);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly activePageService = inject(ActivePageService);

  ngOnInit(): void {
    if (!this.project) {
      this.router.navigate(['/404']);

      return;
    }

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { projectName: this.project?.readMoreUrl } as Params,
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });

    this.activePageService.setActivePage({ page: `pages.${Page[Page.Project]}`, subPage: this.project?.title });
  }

  ngOnDestroy(): void {
    this.projectService.clearSelectedProject();
  }

  get project(): Project | undefined {
    return this.projectService.getSelectedProject();
  }
}
