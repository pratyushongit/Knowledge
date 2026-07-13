import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector : "[inputFallback]"
})
export class FallbackDirective {
    @Input('format') format;
    constructor(private el : ElementRef){}

    @HostListener('blur')
    transformInput(){
        let element : HTMLInputElement = this.el.nativeElement;
        if(this.format == 'lowercase'){
            element.value = element.value.toLowerCase();
        }
        else{
            element.value = element.value.toUpperCase();
        }  
        
    }
}