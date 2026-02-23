import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DisableTextSelectionDirective } from './disable-text-selection.directive';

@Component({ template: '<p appDisableTextSelection>no-select</p>' })
class TestHostComponent {}

describe('ngOnInit - DisableTextSelectionDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent, DisableTextSelectionDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
  });

  describe('when initialized', () => {
    it('should apply user-select none to host element', () => {
      // Arrange/Act
      fixture.detectChanges();
      const el: HTMLElement = fixture.debugElement.query(By.css('p')).nativeElement;

      // Assert (check computed style standard property)
      const style = getComputedStyle(el) as CSSStyleDeclaration & { userSelect?: string; webkitUserSelect?: string; msUserSelect?: string };
      expect(style.userSelect === 'none' || style.webkitUserSelect === 'none' || style.msUserSelect === 'none').toBeTrue();
    });
  });
});

describe('blockSelection - DisableTextSelectionDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let directive: DisableTextSelectionDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent, DisableTextSelectionDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    const debugEl = fixture.debugElement.query(By.directive(DisableTextSelectionDirective));
    directive = debugEl.injector.get(DisableTextSelectionDirective) as DisableTextSelectionDirective;
  });

  describe('when mouse/drag/selectstart events occur', () => {
    it('should prevent default on the provided event', () => {
      // Arrange
      const fakeEvent = { preventDefault: jasmine.createSpy('preventDefault') } as unknown as Event;

      // Act
      directive.blockSelection(fakeEvent);

      // Assert
      expect(fakeEvent.preventDefault).toHaveBeenCalled();
    });
  });
});

describe('blockKeySelection - DisableTextSelectionDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let directive: DisableTextSelectionDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent, DisableTextSelectionDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    const debugEl = fixture.debugElement.query(By.directive(DisableTextSelectionDirective));
    directive = debugEl.injector.get(DisableTextSelectionDirective) as DisableTextSelectionDirective;
  });

  describe('when shift + navigation keys are pressed', () => {
    it('should prevent default for ArrowLeft key with shift', () => {
      // Arrange
      const ev = { shiftKey: true, key: 'ArrowLeft', preventDefault: jasmine.createSpy('preventDefault') } as unknown as KeyboardEvent;

      // Act
      directive.blockKeySelection(ev);

      // Assert
      expect(ev.preventDefault).toHaveBeenCalled();
    });

    it('should not prevent default when shift is false', () => {
      // Arrange
      const ev = { shiftKey: false, key: 'ArrowLeft', preventDefault: jasmine.createSpy('preventDefault') } as unknown as KeyboardEvent;

      // Act
      directive.blockKeySelection(ev);

      // Assert
      expect(ev.preventDefault).not.toHaveBeenCalled();
    });
  });
});

