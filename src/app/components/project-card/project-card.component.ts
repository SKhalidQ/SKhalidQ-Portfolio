import { Component, inject, Input } from '@angular/core';
import { Project } from 'src/app/models/interfaces/project';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { TranslationService } from 'src/app/services/translation/translation.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
/**
 * @description
 * Presentational component that renders a single project entry as a Material card.
 * Displays project metadata, a preview image, and action buttons for the website
 * and repository links, with tooltips describing their availability.
 */
export class ProjectCardComponent {
  /** The project data to display. Must be provided by the parent. */
  @Input() project!: Project;

  public readonly themeService = inject(ThemeService);
  private readonly translationService = inject(TranslationService);

  /** CSS class applied to all tooltips on this card. */
  readonly tooltipClass: string = 'tooltip';
  /** Delay in milliseconds before tooltips appear. */
  readonly tooltipShowDelay: number = 200;

  /**
   * @description
   * Returns the translated tooltip text for the project website button.
   * Differs based on whether the project has a live website URL.
   * @returns {string} Translated tooltip string.
   */
  get getWebsiteTooltip(): string {
    const websiteTooltip = 'projectCard.websiteTooltip';
    const unavailableWebsiteTooltip = 'projectCard.unavailableWebsiteTooltip';
    const tooltip = this.translationService.getTextPath(this.project.websiteUrl ? websiteTooltip : unavailableWebsiteTooltip);

    return tooltip;
  }

  /**
   * @description
   * Returns the translated tooltip text for the project repository button.
   * Differs based on whether the project repository is public.
   * @returns {string} Translated tooltip string.
   */
  get getRepoTooltip(): string {
    const repoTooltip = 'projectCard.repoTooltip';
    const privateRepoTooltip = 'projectCard.privateRepoTooltip';
    const tooltip = this.translationService.getTextPath(this.project.isRepoPublic ? repoTooltip : privateRepoTooltip);

    return tooltip;
  }

  /**
   * @description
   * Handles image load errors by applying a fallback image and styling.
   * @param imageElement The image element that encountered an error.
   * @returns void
   */
  onImageError(imageElement: HTMLImageElement): void {
    if ((imageElement.dataset)['fallbackApplication']) {
      return;
    }

    (imageElement.dataset)['fallbackApplied'] = '1';
    imageElement.src = 'assets/images/icons/error_outline-14px.svg';
    imageElement.classList.add('img--fallback');
  }
}
