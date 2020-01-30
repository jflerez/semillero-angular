import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {

  constructor(private el: ElementRef) { }


  @HostListener('mouseenter') onMouseEnter() {
    this.aplicarColor('red');
  }


  @HostListener('mouseleave') onMouseLeave() {
  this.aplicarColor(null);
  }


  @HostListener('click', ['$event']) molestar(event: any) {
    alert('hola');
    }

  aplicarColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
