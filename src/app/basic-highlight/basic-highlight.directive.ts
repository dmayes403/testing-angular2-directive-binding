import { Directive, ElementRef, OnInit } from '@angular/core'

@Directive({
  selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit{
  constructor(private elementRef: ElementRef) {  // <--- by assigning ElementRef to elementRef, we now have access to the element the directive is sitting on.
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
