import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { NO_ERRORS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ProjectsPageComponent } from './projects-page.component';
import { ActivePageService } from 'src/app/services/active-page/active-page.service';
import { TranslationService } from 'src/app/services/translation/translation.service';
import { Projects } from 'src/app/models/data/projects-info';
import { ProjectType } from 'src/app/models/enums/project-type';
import { Page } from 'src/app/models/enums/page';

@Pipe({ name: 'translate' })
class MockTranslatePipe implements PipeTransform {
  transform(value: unknown): unknown { return value; }
}

describe('ProjectsPageComponent', () => {
  let component: ProjectsPageComponent;
  let fixture: ComponentFixture<ProjectsPageComponent>;

  const activePageSubject = new BehaviorSubject<string>('');
  let activePageNextSpy: jasmine.Spy;
  const mockActivePageService: Partial<ActivePageService> = { activePage: activePageSubject };

  const mockTranslationService: Partial<TranslationService> = {
    getTextPath: (key: string) => `translated.${key}`
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [ProjectsPageComponent, MockTranslatePipe],
      providers: [
        { provide: ActivePageService, useValue: mockActivePageService },
        { provide: TranslationService, useValue: mockTranslationService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(ProjectsPageComponent);
    component = fixture.componentInstance;
    activePageNextSpy = spyOn(activePageSubject, 'next').and.callThrough();
  });

  it('creates the component', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    describe('when component initializes', () => {
      it('calls activePageService.activePage.next with pages.Projects', () => {
        // Arrange
        activePageNextSpy.calls.reset();

        // Act
        fixture.detectChanges();

        // Assert
        expect(activePageNextSpy).toHaveBeenCalledTimes(1);
        const arg = activePageNextSpy.calls.mostRecent().args[0] as string;
        expect(arg).toContain('pages.');
        expect(arg).toContain(Page[Page.Projects]);
      });
    });
  });

  describe('filteredProjects', () => {
    describe('when selectedProjectType is All', () => {
      it('returns all non-hidden projects', () => {
        // Arrange
        component.selectedProjectType = -1;

        // Act
        const result = component.filteredProjects;

        // Assert
        const expected = Projects.filter(p => !p.isHidden);
        expect(result.length).toBe(expected.length);
        expect(result.every(p => !p.isHidden)).toBeTrue();
      });
    });

    describe('when selectedProjectType is PersonalProject', () => {
      it('returns only non-hidden personal projects', () => {
        // Arrange
        component.selectedProjectType = ProjectType.PersonalProject as unknown as number;

        // Act
        const result = component.filteredProjects;

        // Assert
        const expected = Projects.filter(p => (p.projectType as number) === ProjectType.PersonalProject && !p.isHidden);
        expect(result.length).toBe(expected.length);
        expect(result.every(p => (p.projectType as number) === ProjectType.PersonalProject)).toBeTrue();
      });
    });
  });

  describe('projectTypeLabel', () => {
    describe('when called for PersonalProject', () => {
      it('returns a translation key containing the enum name', () => {
        // Arrange

        // Act
        const label = component.projectTypeLabel(ProjectType.PersonalProject as unknown as number);

        // Assert
        expect(label).toContain('projectsPage.ProjectTypeFilter.');
        expect(label).toContain('PersonalProject');
      });
    });
  });

  describe('errorMessage', () => {
    it('delegates to TranslationService.getTextPath', () => {
      // Arrange

      // Act
      const msg = component.errorMessage;

      // Assert
      expect(msg).toBe('translated.projectsPage.noProjectsError');
    });
  });

  describe('isTypeDisabled', () => {
    describe('when checking All', () => {
      it('returns false', () => {
        // Act / Assert
        expect(component.isTypeDisabled(-1)).toBeFalse();
      });
    });

    describe('when checking a specific type', () => {
      it('matches the data-driven expectation', () => {
        // Arrange
        const workDisabled = !Projects.some(p => (p.projectType as number) === ProjectType.WorkProject);

        // Act / Assert
        expect(component.isTypeDisabled(ProjectType.WorkProject as unknown as number)).toBe(workDisabled);
      });
    });
  });
});
