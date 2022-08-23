import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appCustomResize]'
})
export class CustomResizeDirective {
  @Input() appCustomResize: any;

  constructor(private el: ElementRef) {
    console.log(this.appCustomResize);
    if(this.appCustomResize.width){
      this.el.nativeElement.style = `width: ${this.appCustomResize.width}`;
    }
  }
  @HostListener('resize') onResize(){
    console.log(this.el.nativeElement.style);
  }
  @HostListener('click') onClick(){
    console.log('click');
    console.log(this.el.nativeElement.style);
  }

}
