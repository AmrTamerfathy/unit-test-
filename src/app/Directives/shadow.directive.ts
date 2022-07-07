import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ShadowDirective]'
})
export class ShadowDirective implements OnChanges {

  @Input() customColor: string = 'teal';
  @Input() customColor3: string = 'teal';
  constructor(private eleRef: ElementRef) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.eleRef.nativeElement.style.boxShadow = `5px 10px ${this.customColor3}`;
  }

  @HostListener('mouseover') onMouseOver() {
    this.eleRef.nativeElement.style.boxShadow = `20px 20px ${this.customColor}`;
  }


  @HostListener('mouseout') onMouseOut() {
    this.eleRef.nativeElement.style.boxShadow = `5px 10px  ${this.customColor3}`;
  }

}

