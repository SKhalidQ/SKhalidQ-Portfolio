import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisableRightclick]'
})
export class DisableRightclickDirective {

  constructor() { }

  @HostListener('contextmenu', ['$event'])
  onRightClick(event: any): void {
    event.preventDefault();
  }

}
