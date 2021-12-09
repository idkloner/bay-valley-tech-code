import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
//opposite of inIf, cause only completes action when false

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {     //set makes it act like a method, but it is still a property, thus runs when the property changes
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
//            TemplateRef like ElementRef, but for in the template and the second is for where,
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
