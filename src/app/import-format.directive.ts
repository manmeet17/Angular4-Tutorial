import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appImportFormat]'
})
export class ImportFormatDirective {
  // @HostListener('focus')
  // onFocus(){
  //   console.log("On focus");
  // }
  @Input() format;

  constructor(private el: ElementRef) {    
  }

  @HostListener('blur')
  onBlur(){
    console.log("On Blur");
    let value: string=this.el.nativeElement.value;
    if(this.format==="lowercase")
    this.el.nativeElement.value=value.toLowerCase();
    else
    this.el.nativeElement.value=value.toUpperCase();
  }
  

}
