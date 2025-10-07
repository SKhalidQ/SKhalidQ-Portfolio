import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DisableTextSelectionDirective } from './disable-text-selection.directive';

@Component({
  template: `<div id="target" appDisableTextSelection>Text</div>`
})
class HostComponent {}

describe('DisableTextSelectionDirective', () => {
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostComponent, DisableTextSelectionDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
  });

  it('should apply user-select none styles', () => {
    const el: HTMLElement = fixture.debugElement.query(By.css('#target')).nativeElement;
    const style = getComputedStyle(el);
    // Browsers may normalize vendor prefixes, check standard property
    expect(style.userSelect).toBe('none');
  });

  it('should prevent selection events', () => {
    const debugEl = fixture.debugElement.query(By.css('#target'));
    const el: HTMLElement = debugEl.nativeElement;
    const events = ['mousedown','selectstart','dragstart'];
    events.forEach(type => {
      const ev = new Event(type, { bubbles: true, cancelable: true });
      const canceled = !el.dispatchEvent(ev); // dispatchEvent returns false if preventDefault called
      expect(canceled || ev.defaultPrevented).toBeTrue();
    });
  });
});
