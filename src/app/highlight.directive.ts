import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight: string = '';
  @Input() defaultColor: string = "";
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.onHighlight(this.appHighlight || this.defaultColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.onHighlight('white');
  }

  onHighlight(fcolor: string = '') {
    this.el.nativeElement.style.backgroundColor = fcolor;
  }

}
