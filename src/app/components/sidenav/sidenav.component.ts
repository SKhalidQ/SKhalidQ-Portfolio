import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuBaseComponentDirective } from 'src/app/directives/menu-base-component/menu-base-component.directive';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
/**
 * @description
 * Smart component that renders the slide-in side navigation panel.
 * Mirrors the theme and language controls from the header and adds
 * navigation links. Emits {@link toggleSidenav} to request the sidenav
 * to close (delegated to the parent layout component).
 */
export class SidenavComponent extends MenuBaseComponentDirective implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();

  override ngOnInit(): void {
    super.ngOnInit(); // Initialise shared menu state and subscriptions
  }

  /**
   * @description
   * Emits the {@link toggleSidenav} output to request the parent to close
   * the sidenav. Stored as an arrow function so it can be passed as a callback
   * reference to child components without losing `this` context.
   * @returns {void}
   */
  closeSidenav = (): void => {
    this.toggleSidenav.emit();
  };
}
