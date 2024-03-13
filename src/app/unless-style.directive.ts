import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appUnlessStyle]'
})
export class UnlessStyleDirective implements OnChanges {
  @Input() appUnlessStyle: boolean = false;

  constructor(private el: ElementRef) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.el.nativeElement.style.backgroundColor = this.appUnlessStyle == false ? "yellow" : "green";
  }
}
