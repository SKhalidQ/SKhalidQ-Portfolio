import { NO_ERRORS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconRailComponent } from './icon-rail.component';

@Pipe({ name: 'translate' })
class MockTranslatePipe implements PipeTransform {
  transform(value: string): string {
    return value;
  }
}

describe('constructor - IconRailComponent', () => {
  let component: IconRailComponent;
  let fixture: ComponentFixture<IconRailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconRailComponent, MockTranslatePipe],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(IconRailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('when created', () => {
    it('should create the component instance', () => {
      // Arrange: TestBed has created the component in beforeEach
      // Act: N/A (creation happened during setup)
      // Assert:
      expect(component).toBeTruthy();
    });
  });
});
