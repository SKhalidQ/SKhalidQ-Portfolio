import { Component, inject, Input } from '@angular/core';
import { Environment } from 'src/app/models/enums/environment';
import { Project } from 'src/app/models/interfaces/project';
import { SelectedProjectService } from 'src/app/services/selected-project/selected-project.service';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { TranslationService } from 'src/app/services/translation/translation.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project!: Project;

  private readonly selectedProjectService = inject(SelectedProjectService);
  public readonly themeService = inject(ThemeService);
  private readonly translationService = inject(TranslationService);

  readonly tooltipClass: string = 'tooltip';
  readonly tooltipShowDelay: number = 200;
  readonly currentEnvironment: Environment = environment.environment;
  readonly environment = Environment;
  readonly readMoreUrl = '/projects/project';

  get getWebsiteTooltip(): string {
    const websiteTooltip = 'projectCard.websiteTooltip';
    const unavailableWebsiteTooltip = 'projectCard.unavailableWebsiteTooltip';
    const tooltip = this.translationService.getTextPath(this.project.websiteUrl ? websiteTooltip : unavailableWebsiteTooltip);

    return tooltip;
  }

  get getRepoTooltip(): string {
    const repoTooltip = 'projectCard.repoTooltip';
    const privateRepoTooltip = 'projectCard.privateRepoTooltip';
    const tooltip = this.translationService.getTextPath(this.project.isRepoPublic ? repoTooltip : privateRepoTooltip);

    return tooltip;
  }

  setSelectedProject(): void {
    this.selectedProjectService.selectProject(this.project);
  }
}
