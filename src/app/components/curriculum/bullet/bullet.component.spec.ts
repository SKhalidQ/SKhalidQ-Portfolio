import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletComponent } from './bullet.component';

describe('BulletComponent', () => {
  let component: BulletComponent;
  let fixture: ComponentFixture<BulletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BulletComponent]
    });
    fixture = TestBed.createComponent(BulletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
