import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisableRightClick]'
})
/**
 * @description
 * Attribute directive that suppresses the browser's native context menu
 * on the host element and all its children.
 *
 * @example
 * ```html
 * <img appDisableRightClick [src]="imagePath" />
 * ```
 */
export class DisableRightClickDirective {

  /**
   * @description
   * Listens for the `contextmenu` event on the host element and calls
   * `preventDefault()` to block the native context menu from appearing.
   * @param {Event} event - The native `contextmenu` DOM event.
   * @returns {void}
   */
  @HostListener('contextmenu', ['$event'])
  onRightClick(event: Event): void {
    event.preventDefault();
  }

}
