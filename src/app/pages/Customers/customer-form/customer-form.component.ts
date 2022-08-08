import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'customer-form',
  templateUrl: './customer-form.component.html',
  styles: [],
})
export class CustomerFormComponent {
  @Output() sumbit = new EventEmitter();
  onSubmit({ valid, value }: NgForm) {
    if (valid) return this.sumbit.emit(value);
  }
  resetForm(form: NgForm) {
    form.resetForm();
  }
}
