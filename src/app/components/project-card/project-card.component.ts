import { Component, inject, Input } from '@angular/core';
import { Project } from 'src/app/models/interfaces/project';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { TranslationService } from 'src/app/services/translation/translation.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project!: Project;

  public readonly themeService = inject(ThemeService);
  private readonly translationService = inject(TranslationService);

  readonly tooltipClass: string = 'tooltip';
  readonly tooltipShowDelay: number = 200;

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
}
