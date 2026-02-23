import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { Pipe, PipeTransform, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpStatusCode } from '@angular/common/http';

import { ErrorPageComponent } from './error-page.component';
import { ActivePageService } from 'src/app/services/active-page/active-page.service';
import { ActivatedRoute } from '@angular/router';

@Pipe({ name: 'translate' })
class MockTranslatePipe implements PipeTransform {
  transform(value: unknown): unknown {
    return value;
  }
}
describe('ErrorPageComponent', () => {
  let component: ErrorPageComponent;
  let fixture: ComponentFixture<ErrorPageComponent>;

  function createTestModule(activatedRouteSnapshotData: Record<string, unknown> = {}): { activePageSubject: BehaviorSubject<string> } {
    const activePageSubject = new BehaviorSubject<string>('');
    const mockActivePageService: Partial<ActivePageService> = { activePage: activePageSubject };

    // Cast snapshot to any to avoid constructing full ActivatedRouteSnapshot in tests
    const mockActivatedRoute: Partial<ActivatedRoute> = {
      snapshot: { data: activatedRouteSnapshotData } as unknown as ActivatedRoute['snapshot']
    };

    TestBed.configureTestingModule({
      declarations: [ErrorPageComponent, MockTranslatePipe],
      providers: [
        { provide: ActivePageService, useValue: mockActivePageService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
      ,
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(ErrorPageComponent);
    component = fixture.componentInstance;
    return { activePageSubject };
  }

  describe('ngOnInit', () => {
    describe('when initialized', () => {
      it('should call ActivePageService.activePage.next with "Error"', () => {
        // Arrange
        const { activePageSubject } = createTestModule();
        const spy = spyOn(activePageSubject, 'next').and.callThrough();

        // Act
        fixture.detectChanges(); // runs ngOnInit

        // Assert
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy.calls.mostRecent().args[0]).toBe('Error');
      });
    });
  });

  describe('statusCode', () => {
    describe('when route snapshot contains NotFound', () => {
      it('should return NotFound and set the notFound translation key', () => {
        // Arrange
        createTestModule({ statusCode: HttpStatusCode.NotFound });

        // Act
        const info = component.statusCode;

        // Assert
        expect(info.statusCode).toBe(HttpStatusCode.NotFound);
        expect(info.title).toBe('Not Found');
        expect(component.errorMessage).toBe('errorPage.notFound');
      });
    });

    describe('when snapshot empty but history.state contains Forbidden', () => {
      it('should use history.state and set forbidden translation key', () => {
        // Arrange
        history.replaceState({ statusCode: HttpStatusCode.Forbidden }, '');
        createTestModule();

        // Act
        const info = component.statusCode;

        // Assert
        expect(info.statusCode).toBe(HttpStatusCode.Forbidden);
        expect(info.title).toBe('Forbidden');
        expect(component.errorMessage).toBe('errorPage.forbidden');
      });
    });

    describe('when neither snapshot nor history state has a code', () => {
      it('should default to InternalServerError and generic error key', () => {
        // Arrange
        history.replaceState({}, '');
        createTestModule();

        // Act
        const info = component.statusCode;

        // Assert
        expect(info.statusCode).toBe(HttpStatusCode.InternalServerError);
        expect(info.title).toBe('Internal Server Error');
        expect(component.errorMessage).toBe('errorPage.genericError');
      });
    });
  });
});
