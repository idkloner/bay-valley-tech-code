import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appHighlight]';

});

export class DasicHighlightDirective impliments OnInit{
    constructor(private elementRef: ElementRef) {
        
    }

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
    
}