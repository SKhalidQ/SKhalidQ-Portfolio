import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconRailComponent } from './icon-rail.component';

describe('IconRailComponent', () => {
  let component: IconRailComponent;
  let fixture: ComponentFixture<IconRailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconRailComponent]
    });
    fixture = TestBed.createComponent(IconRailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
