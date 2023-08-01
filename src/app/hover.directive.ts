import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Input,
  OnInit,
  Renderer2,
  inject,
} from '@angular/core';

@Directive({
  selector: '[hinaHover]',
})
export class HoverDirective implements OnInit {
  @Input() color: string = 'red';
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    console.log('ys');
    //this.element.nativeElement.style.backgroundColor = this.color;
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.color
    );
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'red'
    );
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.color
    );
  }
}
