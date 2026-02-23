import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Pipe, PipeTransform } from '@angular/core';

import { SnackbarComponent } from './snackbar.component';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { SnackbarData } from 'src/app/models/interfaces/snackbar-data';

@Pipe({ name: 'translate' })
class MockTranslatePipe implements PipeTransform {
  transform(value: unknown): unknown { return value; }
}

describe('SnackbarComponent', () => {
  let component: SnackbarComponent;
  let fixture: ComponentFixture<SnackbarComponent>;

  const mockSnackRef = { dismiss: jasmine.createSpy('dismiss') } as unknown as MatSnackBarRef<SnackbarComponent>;
  const mockData: SnackbarData = { message: 'msg', action: 'OK', class: 'info' };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnackbarComponent, MockTranslatePipe],
      providers: [
        { provide: MatSnackBarRef, useValue: mockSnackRef },
        { provide: MAT_SNACK_BAR_DATA, useValue: mockData }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(SnackbarComponent);
    component = fixture.componentInstance;
  });

  it('creates the component', () => {
    expect(component).toBeTruthy();
  });

  describe('data', () => {
    describe('when provided with MAT_SNACK_BAR_DATA', () => {
      it('exposes the injected snackbar data', () => {
        // Arrange

        // Act
        fixture.detectChanges();

        // Assert
        expect(component.data).toBeDefined();
        expect(component.data.message).toBe('msg');
        expect(component.data.action).toBe('OK');
        expect(component.data.class).toBe('info');
      });
    });
  });

  describe('dismiss', () => {
    describe('when called', () => {
      it('calls MatSnackBarRef.dismiss', () => {
        // Arrange
        fixture.detectChanges();

        // Act
        component.dismiss();

        // Assert
        expect(mockSnackRef.dismiss).toHaveBeenCalledTimes(1);
      });
    });
  });
});
