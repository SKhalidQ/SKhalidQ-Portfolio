import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { NO_ERRORS_SCHEMA, Pipe, PipeTransform } from '@angular/core';

import { CurriculumPageComponent } from './curriculum-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivePageService } from 'src/app/services/active-page/active-page.service';
import { Page } from 'src/app/models/enums/page';
import { CurriculumInfo } from 'src/app/models/data/curriculum-info';

@Pipe({ name: 'translate' })
class MockTranslatePipe implements PipeTransform {
  transform(value: unknown): unknown { return value; }
}

describe('CurriculumPageComponent', () => {
  let component: CurriculumPageComponent;
  let fixture: ComponentFixture<CurriculumPageComponent>;

  const activePageSubject = new BehaviorSubject<string>('');
  let activePageNextSpy: jasmine.Spy;
  const mockActivePageService: Partial<ActivePageService> = { activePage: activePageSubject };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [CurriculumPageComponent, MockTranslatePipe],
      providers: [
        { provide: ActivePageService, useValue: mockActivePageService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(CurriculumPageComponent);
    component = fixture.componentInstance;
    activePageNextSpy = spyOn(activePageSubject, 'next').and.callThrough();
  });

  it('creates the component', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    describe('when component initializes', () => {
      it('calls activePageService.activePage.next with pages.Curriculum', () => {
        // Arrange
        activePageNextSpy.calls.reset();

        // Act
        fixture.detectChanges();

        // Assert
        expect(activePageNextSpy).toHaveBeenCalledTimes(1);
        const arg = activePageNextSpy.calls.mostRecent().args[0] as string;
        expect(arg).toContain('pages.');
        expect(arg).toContain(Page[Page.Curriculum]);
      });
    });
  });

  describe('curriculum', () => {
    describe('by default', () => {
      it('exposes the static curriculum data', () => {
        // Arrange

        // Act
        const data = component.curriculum;

        // Assert
        expect(data).toBeDefined();
        expect(data).toEqual(CurriculumInfo);
      });
    });
  });
});
