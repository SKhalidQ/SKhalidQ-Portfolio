import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, NO_ERRORS_SCHEMA } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ClassicCurriculumComponent } from './classic-curriculum.component';
import { Curriculum } from 'src/app/models/interfaces/curriculum';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Pipe({ name: 'translate' })
class MockTranslatePipe implements PipeTransform {
  transform(value: string): string {
    return value;
  }
}

class MockSnackbarService {
  openSnackbar = jasmine.createSpy('openSnackbar');
}

class MockBreakpointObserver {
  private subject = new BehaviorSubject({ breakpoints: {} });
  observe = jasmine.createSpy('observe').and.returnValue(this.subject.asObservable());
  next(value: { breakpoints: Record<string, boolean> }): void {
    this.subject.next(value);
  }
}

const minimalCurriculum: Curriculum = {
  header: {
    name: 'Name',
    title: 'Title',
    logoImagePath: '',
    contactDetails: []
  },
  profile: { title: 'Profile', description: 'Description' },
  employment: { title: 'Employment', history: [] },
  education: { title: 'Education', education: [] },
  technicalSkills: { title: 'Tech', skills: [] },
  nonTechnicalSkills: { title: 'NonTech', skills: [] },
  achievements: { title: 'Achievements', achievements: [] },
  hobbies: { title: 'Hobbies', hobbies: [] }
};

describe('constructor - ClassicCurriculumComponent', () => {
  let fixture: ComponentFixture<ClassicCurriculumComponent>;
  let component: ClassicCurriculumComponent;
  let mockSnackbar: MockSnackbarService;
  let mockBreakpoint: MockBreakpointObserver;

  beforeEach(async () => {
    mockSnackbar = new MockSnackbarService();
    mockBreakpoint = new MockBreakpointObserver();

    await TestBed.configureTestingModule({
      declarations: [ClassicCurriculumComponent, MockTranslatePipe],
      providers: [
        { provide: SnackbarService, useValue: mockSnackbar },
        { provide: BreakpointObserver, useValue: mockBreakpoint },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ClassicCurriculumComponent);
    component = fixture.componentInstance;
    component.curriculum = minimalCurriculum;
  });

  describe('when created', () => {
    it('should create the component instance', () => {
      // Arrange
      // Act
      fixture.detectChanges();
      // Assert
      expect(component).toBeTruthy();
    });
  });

  describe('when clipboard notify is called', () => {
    beforeEach(() => {
      fixture.detectChanges();
      component.notify();
    });

    it('should call snackbar.openSnackbar with correct keys', () => {
      expect(mockSnackbar.openSnackbar).toHaveBeenCalledWith('snackbar.copiedToClipboard', 'snackbar.dismiss');
      expect((mockSnackbar.openSnackbar as jasmine.Spy).calls.count()).toBe(1);
    });
  });

  describe('when breakpoint observer emits small and xsmall flags', () => {
    it('should update smallScreen and xSmallScreen flags accordingly', () => {
      // Arrange
      const smallState = { breakpoints: { [Breakpoints.Small]: true, [Breakpoints.XSmall]: false } };
      const xSmallState = { breakpoints: { [Breakpoints.Small]: false, [Breakpoints.XSmall]: true } };

      // Act
      mockBreakpoint.next(smallState);
      fixture.detectChanges();

      // Assert small
      expect(component.smallScreen).toBeTrue();
      expect(component.xSmallScreen).toBeFalse();

      // Act xsmall
      mockBreakpoint.next(xSmallState);
      fixture.detectChanges();

      // Assert xsmall
      expect(component.smallScreen).toBeFalse();
      expect(component.xSmallScreen).toBeTrue();
    });
  });

  describe('onImageError - when fallback not applied', () => {
    it('should apply fallback src and class', () => {
      // Arrange
      const img = document.createElement('img');

      // Act
      component.onImageError(img);

      // Assert
      expect(img.dataset['fallbackApplied']).toBe('1');
      expect(img.src).toContain('assets/images/icons/error_outline-14px.svg');
      expect(img.classList.contains('img--fallback')).toBeTrue();
    });
  });

  describe('onImageError - when fallbackApplication flag present', () => {
    it('should not overwrite when fallbackApplication is set', () => {
      // Arrange
      const img = document.createElement('img');
      img.dataset['fallbackApplication'] = '1';

      // Act
      component.onImageError(img);

      // Assert
      expect(img.dataset['fallbackApplied']).toBeUndefined();
    });
  });
});
