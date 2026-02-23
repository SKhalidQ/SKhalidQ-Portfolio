import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Pipe, PipeTransform } from '@angular/core';

import { ProjectCardComponent } from './project-card.component';
import { TranslationService } from 'src/app/services/translation/translation.service';
import { Project } from 'src/app/models/interfaces/project';
import { Projects } from 'src/app/models/data/projects-info';

@Pipe({ name: 'translate' })
class MockTranslatePipe implements PipeTransform {
  transform(value: unknown): unknown { return value; }
}

@Pipe({ name: 'githubLogo' })
class MockGithubLogoPipe implements PipeTransform {
  transform(): unknown { return 'mock-github.png'; }
}

describe('ProjectCardComponent', () => {
  let component: ProjectCardComponent;
  let fixture: ComponentFixture<ProjectCardComponent>;

  const mockTranslationService: Partial<TranslationService> = {
    getTextPath: (k: string) => `translated.${k}`
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectCardComponent, MockTranslatePipe, MockGithubLogoPipe],
      providers: [
        { provide: TranslationService, useValue: mockTranslationService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(ProjectCardComponent);
    component = fixture.componentInstance;
  });

  it('creates the component', () => {
    expect(component).toBeTruthy();
  });

  describe('getWebsiteTooltip', () => {
    describe('when project has websiteUrl', () => {
      it('returns the website tooltip translation', () => {
        // Arrange
        const proj: Project = { ...Projects[1] } as Project;
        proj.websiteUrl = 'https://example.test';
        component.project = proj;

        // Act
        fixture.detectChanges();
        const result = component.getWebsiteTooltip;

        // Assert
        expect(result).toBe('translated.projectCard.websiteTooltip');
      });
    });

    describe('when project has no websiteUrl', () => {
      it('returns the unavailable website tooltip translation', () => {
        // Arrange
        const proj: Project = { ...Projects[1] } as Project;
        proj.websiteUrl = undefined;
        component.project = proj;

        // Act
        fixture.detectChanges();
        const result = component.getWebsiteTooltip;

        // Assert
        expect(result).toBe('translated.projectCard.unavailableWebsiteTooltip');
      });
    });
  });

  describe('getRepoTooltip', () => {
    describe('when project is public', () => {
      it('returns the repo tooltip translation', () => {
        // Arrange
        const proj: Project = { ...Projects[3] } as Project;
        proj.isRepoPublic = true;
        component.project = proj;

        // Act
        fixture.detectChanges();
        const result = component.getRepoTooltip;

        // Assert
        expect(result).toBe('translated.projectCard.repoTooltip');
      });
    });

    describe('when project is private', () => {
      it('returns the private repo tooltip translation', () => {
        // Arrange
        const proj: Project = { ...Projects[0] } as Project;
        proj.isRepoPublic = false;
        component.project = proj;

        // Act
        fixture.detectChanges();
        const result = component.getRepoTooltip;

        // Assert
        expect(result).toBe('translated.projectCard.privateRepoTooltip');
      });
    });
  });

  describe('onImageError', () => {
    describe('when fallback not yet applied', () => {
      it('applies fallback dataset, src and class', () => {
        // Arrange
        const img = document.createElement('img') as HTMLImageElement;

        // Act
        component.onImageError(img);

        // Assert
        expect(img.dataset['fallbackApplied']).toBe('1');
        expect(img.src).toContain('assets/images/icons/error_outline-14px.svg');
        expect(img.classList.contains('img--fallback')).toBeTrue();
      });
    });

    describe('when fallback already applied (checked key used by component)', () => {
      it('does nothing', () => {
        // Arrange
        const img = document.createElement('img') as HTMLImageElement;
        img.dataset['fallbackApplication'] = '1';
        const originalSrc = img.src;

        // Act
        component.onImageError(img);

        // Assert
        expect(img.src).toBe(originalSrc);
      });
    });
  });
});
