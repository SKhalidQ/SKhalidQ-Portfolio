import { Directive, ElementRef, HostListener, Renderer2, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appDisableTextSelection]'
})
/**
 * @description
 * Attribute directive that prevents text selection on the host element.
 * Applies CSS `user-select: none` (with vendor prefixes) on init and
 * blocks mouse, touch, drag, and keyboard-based selection events.
 *
 * @example
 * ```html
 * <p appDisableTextSelection>Non-selectable content</p>
 * ```
 */
export class DisableTextSelectionDirective implements OnInit {
  private readonly elementReference = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  /**
   * @description
   * Applies `user-select: none` CSS (with all required vendor prefixes) to
   * the host element's native DOM node via the Angular {@link Renderer2}.
   * @returns {void}
   */
  ngOnInit(): void {
    this.renderer.setStyle(this.elementReference.nativeElement, 'user-select', 'none');
    this.renderer.setStyle(this.elementReference.nativeElement, '-webkit-user-select', 'none');
    this.renderer.setStyle(this.elementReference.nativeElement, '-ms-user-select', 'none');
    this.renderer.setStyle(this.elementReference.nativeElement, '-moz-user-select', 'none');
  }

  /**
   * @description
   * Blocks mouse-down, selection-start, and drag-start events to prevent
   * text selection via pointer interaction.
   * @param {Event} event - The triggering DOM event.
   * @returns {void}
   */
  @HostListener('mousedown', ['$event'])
  @HostListener('selectstart', ['$event'])
  @HostListener('dragstart', ['$event'])
  blockSelection(event: Event): void {
    event.preventDefault();
  }

  /**
   * @description
   * Blocks keyboard-based text selection by preventing default on shift +
   * navigation key combinations (arrow keys, Home, End, Page Up/Down).
   * @param {KeyboardEvent} event - The `keydown` keyboard event.
   * @returns {void}
   */
  @HostListener('keydown', ['$event'])
  blockKeySelection(event: KeyboardEvent): void {
    if (event.shiftKey && ['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End','PageUp','PageDown'].includes(event.key)) {
      event.preventDefault();
    }
  }
}
