import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogComponent } from './dialog.component';
import { DialogData } from 'src/app/models/interfaces/dialog-data';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  const mockDialogData: DialogData = {
    title: 'Test Title',
    message: 'Some content',
    action: 'OK'
  };

  const mockDialogRef = { close: jasmine.createSpy('close') } as unknown as MatDialogRef<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogComponent, MockTranslatePipe],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: mockDialogData }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
  });

  @Pipe({ name: 'translate' })
  class MockTranslatePipe implements PipeTransform {
    transform(value: unknown): unknown { return value; }
  }

  it('creates the component', () => {
    expect(component).toBeTruthy();
  });

  describe('data', () => {
    describe('when MAT_DIALOG_DATA is provided', () => {
      it('exposes the injected data', () => {
        // Arrange

        // Act
        fixture.detectChanges();

        // Assert
        expect(component.data).toBeDefined();
        expect(component.data.title).toBe('Test Title');
        expect(component.data.message).toBe('Some content');
        expect(component.data.action).toBe('OK');
      });
    });
  });
});
