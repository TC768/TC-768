// dynamic-validation.directive.ts
import { Directive, Input, HostBinding, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appDynamicValidation]',
})
export class DynamicValidationDirective {
  @Input() ngControl!: NgControl;
  @Input() controlType!: string;
  @Input() validationMessages!: { [key: string]: string };

  @HostBinding('class.is-invalid')
  get isInvalid(): boolean {
    return (this.ngControl.invalid !== null) && (this.ngControl.invalid && (this.ngControl.dirty || this.ngControl.touched)) ? true : false;

  }

  constructor(private el: ElementRef) { }

  get control() {
    return this.el.nativeElement;
  }
}
