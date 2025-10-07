import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DisableRightClickDirective } from './disable-right-click.directive';

@Component({
  template: `<div id="ctx" appDisableRightClick>Right click me</div>`
})
class HostComponent {}

describe('DisableRightClickDirective', () => {
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostComponent, DisableRightClickDirective]
    }).compileComponents();
    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
  });

  it('should create host with directive', () => {
    const el = fixture.debugElement.query(By.directive(DisableRightClickDirective));
    expect(el).toBeTruthy();
  });

  it('should prevent default on contextmenu', () => {
    const el: HTMLElement = fixture.debugElement.query(By.css('#ctx')).nativeElement;
    const event = new MouseEvent('contextmenu', { bubbles: true, cancelable: true, button: 2 });
    const preventedBefore = event.defaultPrevented;
    el.dispatchEvent(event);
    expect(event.defaultPrevented).toBeTrue();
    expect(preventedBefore).toBeFalse();
  });
});
