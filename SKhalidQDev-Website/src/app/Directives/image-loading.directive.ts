import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImageLoading]'
})
export class ImageLoadingDirective {

  constructor({nativeElement}: ElementRef<HTMLImageElement>) {
    const supports = 'loading' in HTMLImageElement.prototype;

    if (supports) nativeElement.setAttribute('loading', 'lazy');
  }

}
