import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicCurriculumComponent } from './classic-curriculum.component';

describe('ClassicCurriculumComponent', () => {
  let component: ClassicCurriculumComponent;
  let fixture: ComponentFixture<ClassicCurriculumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassicCurriculumComponent]
    });
    fixture = TestBed.createComponent(ClassicCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
