import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styles: [],
})
export class ContactFormComponent {
  @Output() sumbit = new EventEmitter();
  onSubmit({ valid, value }: NgForm) {
    if (valid) return this.sumbit.emit(value);
  }
  resetForm(form: NgForm) {
    form.resetForm();
  }
}
