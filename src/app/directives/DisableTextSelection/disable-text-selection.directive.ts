import { Directive, ElementRef, HostListener, Renderer2, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appDisableTextSelection]'
})
export class DisableTextSelectionDirective implements OnInit {
  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'user-select', 'none');
    this.renderer.setStyle(this.el.nativeElement, '-webkit-user-select', 'none');
    this.renderer.setStyle(this.el.nativeElement, '-ms-user-select', 'none');
    this.renderer.setStyle(this.el.nativeElement, '-moz-user-select', 'none');
  }

  @HostListener('mousedown', ['$event'])
  @HostListener('selectstart', ['$event'])
  @HostListener('dragstart', ['$event'])
  blockSelection(event: Event) {
    event.preventDefault();
  }

  @HostListener('keydown', ['$event'])
  blockKeySelection(event: KeyboardEvent) {
    if (event.shiftKey && ['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End','PageUp','PageDown'].includes(event.key)) {
      event.preventDefault();
    }
  }
}
