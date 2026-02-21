import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { MenuBaseComponentDirective } from 'src/app/directives/menu-base-component/menu-base-component.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
/**
 * @description
 * Smart component that renders the application top bar.
 * Handles theme selection, language selection, navigation, and responsive
 * breakpoint switching between full header and sidenav-toggle mode.
 * When used inside the sidenav (`isSideNav = true`), menu buttons are hidden
 * and a close icon is shown instead of the hamburger.
 */
export class HeaderComponent extends MenuBaseComponentDirective implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();
  @Input() isSideNav = false;

  private readonly breakpointObserver = inject(BreakpointObserver);

  readonly logo: { text: string, icon: string } = { text: 'My Portfolio', icon: './assets/images/logos/logo_transparent.svg' };

  smallScreen = false;
  xSmallScreen = false;

  constructor() {
    super();
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe((x) => {
      this.smallScreen = x.breakpoints[Breakpoints.Small] && !x.breakpoints[Breakpoints.XSmall];
      this.xSmallScreen = x.breakpoints[Breakpoints.XSmall];
    });
  }

  override ngOnInit(): void {
    super.ngOnInit(); // Initialise shared menu state and subscriptions
  }

  /**
   * @description Returns the appropriate Material icon name for the sidenav toggle button.
   * @returns {string} `'clear'` when the sidenav is open, `'menu'` when closed.
   */
  get getSideNavToggleIcon(): string {
    return this.isSideNav ? 'clear' : 'menu';
  }

  /**
   * @description
   * Returns `true` when the icon-only menu buttons should be hidden.
   * Menu buttons are hidden when rendered inside the sidenav, or on small/extra-small screens
   * (where the full sidenav is used instead).
   * @returns {boolean} `true` if menu buttons should not be rendered.
   */
  get hideMenuButtons(): boolean {
    return !this.isSideNav && !(this.smallScreen || this.xSmallScreen);
  }
}
