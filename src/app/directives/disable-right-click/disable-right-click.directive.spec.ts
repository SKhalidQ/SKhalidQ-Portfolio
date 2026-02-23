import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DisableRightClickDirective } from './disable-right-click.directive';

@Component({ template: '<div id="host" appDisableRightClick>content</div>' })
class TestHostComponent {}

describe('onRightClick - DisableRightClickDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let hostEl: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent, DisableRightClickDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    hostEl = fixture.debugElement.query(By.css('#host')).nativeElement as HTMLElement;
  });

  describe('when contextmenu event occurs', () => {
    it('should prevent the native context menu (defaultPrevented)', () => {
      // Arrange
      const ev = new MouseEvent('contextmenu', { bubbles: true, cancelable: true, button: 2 });

      // Act
      const canceled = !hostEl.dispatchEvent(ev);

      // Assert
      expect(ev.defaultPrevented || canceled).toBeTrue();
    });
  });
});

