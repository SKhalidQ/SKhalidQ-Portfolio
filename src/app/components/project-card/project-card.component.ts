import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, inject, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Project } from 'src/app/models/interfaces/project';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { TranslationService } from 'src/app/services/translation/translation.service';
import { LanguageService } from 'src/app/services/language/language.service';
import { Subject, skip, takeUntil } from 'rxjs';

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
export class ProjectCardComponent implements OnInit, AfterViewInit, OnDestroy {
  /** The project data to display. Must be provided by the parent. */
  @Input() project!: Project;
  /** Reference to the paragraph element containing the project description. Used for overflow detection. */
  @ViewChild('descriptionElement') private descriptionElementReference!: ElementRef<HTMLParagraphElement>;

  public readonly themeService = inject(ThemeService);
  private readonly translationService = inject(TranslationService);
  private readonly languageService = inject(LanguageService);
  private readonly cdr = inject(ChangeDetectorRef);

  /** CSS class applied to all tooltips on this card. */
  readonly tooltipClass: string = 'tooltip';
  /** Delay in milliseconds before tooltips appear. */
  readonly tooltipShowDelay: number = 200;
  /** Number of characters shown in the truncated state. Only used for slicing, not for overflow detection. */
  readonly descriptionCharacterLimit = 263;
  /** Whether the full description is currently shown (toggled by "Read More"). */
  showFullDescription = false;
  /** Whether the description text overflows the allocated space, necessitating truncation. */
  hasOverflow = false;

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    // skip(1): BehaviorSubject emits immediately on subscribe; the initial
    // measurement is handled by ngAfterViewInit once the DOM is ready.
    this.languageService.currentLanguage$
      .pipe(skip(1), takeUntil(this.destroy$))
      .subscribe(() => {
        this.showFullDescription = false;
        this.hasOverflow = false; // Show full text so the DOM renders it before measuring
        setTimeout(() => {
          this.detectDomOverflow();
          this.cdr.detectChanges();
        });
      });
  }

  ngAfterViewInit(): void {
    // Defer one tick so the card's flex layout has settled and clientHeight is stable
    setTimeout(() => {
      this.detectDomOverflow();
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * @description
   * Returns the description text to display. When the description overflows and
   * the card is not expanded, returns the text truncated to the character limit
   * with an ellipsis so that the inline "Read More" button follows naturally.
   */
  get displayDescription(): string {
    const translated = this.translationService.getTextPath(this.project.description);
    if (this.hasOverflow && !this.showFullDescription) {
      return translated.substring(0, this.descriptionCharacterLimit) + '...';
    }

    return translated;
  }

  /**
   * @description
   * Detects overflow by comparing the paragraph's scrollHeight (actual content
   * height) against its clientHeight (flex-allocated height). Because the <p>
   * has overflow: hidden, scrollHeight correctly reflects how tall the text
   * truly is — even when the element is shorter due to flexbox constraints.
   */
  private detectDomOverflow(): void {
    if (!this.descriptionElementReference?.nativeElement) {
      return;
    }

    const p = this.descriptionElementReference.nativeElement;
    this.hasOverflow = p.scrollHeight > p.clientHeight;
  }

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
