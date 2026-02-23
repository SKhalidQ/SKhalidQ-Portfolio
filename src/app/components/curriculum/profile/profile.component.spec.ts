import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Pipe, PipeTransform } from '@angular/core';

import { ProfileComponent } from './profile.component';

@Pipe({ name: 'translate' })
class MockTranslatePipe implements PipeTransform {
  transform(value: unknown): unknown { return value; }
}

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent, MockTranslatePipe],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
  });

  it('creates the component', () => {
    expect(component).toBeTruthy();
  });

  describe('title input', () => {
    describe('when provided a title', () => {
      it('renders the title via the input binding', () => {
        // Arrange
        const testTitle = 'Engineer';
        component.title = testTitle;

        // Act
        fixture.detectChanges();
        const el = fixture.nativeElement as HTMLElement;

        // Assert (ensure DOM contains the title somewhere)
        expect(el.textContent).toContain(testTitle);
      });
    });
  });

  describe('description input', () => {
    describe('when provided a description', () => {
      it('renders the description via the input binding', () => {
        // Arrange
        const testDesc = 'A short bio';
        component.description = testDesc;

        // Act
        fixture.detectChanges();
        const el = fixture.nativeElement as HTMLElement;

        // Assert
        expect(el.textContent).toContain(testDesc);
      });
    });
  });
});
