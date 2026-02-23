import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Pipe, PipeTransform } from '@angular/core';

import { ListComponent } from './list.component';
import { TechnicalSkill } from 'src/app/models/interfaces/curriculum';

@Pipe({ name: 'translate' })
class MockTranslatePipe implements PipeTransform {
  transform(value: unknown): unknown { return value; }
}

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent, MockTranslatePipe],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
  });

  it('creates the component', () => {
    expect(component).toBeTruthy();
  });

  describe('title', () => {
    describe('when provided a title', () => {
      it('renders the translated title', () => {
        // Arrange
        const testTitle = 'Technical Skills';
        component.title = testTitle;

        // Act
        fixture.detectChanges();
        const el = fixture.nativeElement as HTMLElement;

        // Assert
        expect(el.textContent).toContain(testTitle);
      });
    });
  });

  describe('list', () => {
    describe('when provided a list of technical skills', () => {
      it('renders each skill title', () => {
        // Arrange
        const skills: TechnicalSkill[] = [
          { title: 'Skill A', percentage: 80 },
          { title: 'Skill B', percentage: 60 }
        ];
        component.list = skills;

        // Act
        fixture.detectChanges();
        const elements = fixture.nativeElement.querySelectorAll('.element') as NodeListOf<HTMLElement>;

        // Assert
        expect(elements.length).toBe(2);
        expect(elements[0].textContent).toContain('Skill A');
        expect(elements[1].textContent).toContain('Skill B');
      });
    });
  });
});
