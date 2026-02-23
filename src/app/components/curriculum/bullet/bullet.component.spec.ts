import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, NO_ERRORS_SCHEMA } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { BulletComponent } from './bullet.component';
import { BulletPoints } from 'src/app/models/interfaces/curriculum';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Pipe({ name: 'translate' })
class MockTranslatePipe implements PipeTransform {
  transform(value: string): string {
    return value;
  }
}

class MockBreakpointObserver {
  private subject = new BehaviorSubject({ breakpoints: {} });
  observe = jasmine.createSpy('observe').and.returnValue(this.subject.asObservable());
  next(value: { breakpoints: Record<string, boolean> }): void {
    this.subject.next(value);
  }
}

describe('constructor - BulletComponent', () => {
  let fixture: ComponentFixture<BulletComponent>;
  let component: BulletComponent;
  let mockBreakpoint: MockBreakpointObserver;

  beforeEach(async () => {
    mockBreakpoint = new MockBreakpointObserver();

    await TestBed.configureTestingModule({
      declarations: [BulletComponent, MockTranslatePipe],
      providers: [{ provide: BreakpointObserver, useValue: mockBreakpoint }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(BulletComponent);
    component = fixture.componentInstance;
  });

  describe('when created with no inputs', () => {
    it('should create the component instance', () => {
      // Arrange/Act
      fixture.detectChanges();
      // Assert
      expect(component).toBeTruthy();
    });
  });

  describe('when provided a title and points', () => {
    const samplePoints: BulletPoints[] = [
      { title: 'Teamwork', description: 'Worked with others' },
      { title: 'Communication', description: 'Explained ideas' },
    ];

    beforeEach(() => {
      // Arrange
      component.title = 'Curriculum.Points';
      component.points = samplePoints;
      // Act
      fixture.detectChanges();
    });

    it('should render the translated title', () => {
      const el: HTMLElement = fixture.nativeElement as HTMLElement;
      const titleEl = el.querySelector('.title p');
      expect(titleEl?.textContent?.trim()).toBe('Curriculum.Points');
    });

    it('should render the provided points and descriptions', () => {
      const el: HTMLElement = fixture.nativeElement as HTMLElement;
      const items = Array.from(el.querySelectorAll('ul li'));
      expect(items.length).toBe(samplePoints.length);

      items.forEach((itemEl, idx) => {
        const subtitle = itemEl.querySelector('.subtitle')?.textContent?.trim();
        const desc = itemEl.querySelector('.content')?.textContent?.trim();
        expect(subtitle).toContain(samplePoints[idx].title);
        expect(desc).toBe(samplePoints[idx].description);
      });
    });
  });

  describe('underLine - when text is empty', () => {
    it('should return zero width style', () => {
      // Act
      const res = component.underLine('');
      // Assert
      expect(res).toBe('width: 0px;');
    });
  });

  describe('underLine - with keyword and breakpoint states', () => {
    it('should calculate different widths for small and large screens', () => {
      // Arrange
      const teamwork = 'teamwork';

      // Act small screen
      mockBreakpoint.next({ breakpoints: { [Breakpoints.Small]: true, [Breakpoints.XSmall]: false } });
      const smallRes = component.underLine(teamwork);

      // Act large screen
      mockBreakpoint.next({ breakpoints: { [Breakpoints.Small]: false, [Breakpoints.XSmall]: false } });
      const largeRes = component.underLine(teamwork);

      // Assert: small perChar should be 9 for 'teamwork' from component mapping
      const expectedSmallWidth = 9 * teamwork.length;
      const expectedLargeWidth = 11 * teamwork.length;

      expect(smallRes).toBe(`width: ${expectedSmallWidth}px;`);
      expect(largeRes).toBe(`width: ${expectedLargeWidth}px;`);
    });
  });
});

