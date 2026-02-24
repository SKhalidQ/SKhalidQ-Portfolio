import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedBulletPointComponent } from './extended-bullet-point.component';

describe('ExtendedBulletPointComponent', () => {
  let component: ExtendedBulletPointComponent;
  let fixture: ComponentFixture<ExtendedBulletPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtendedBulletPointComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtendedBulletPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
