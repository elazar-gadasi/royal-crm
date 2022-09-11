import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contacts } from '../contacts.component';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styles: [],
})
export class ContactFormComponent {
  @Output() submit = new EventEmitter();
  @Output() reset = new EventEmitter();

  @Input() contact: Contacts = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',

    birthDay: '',
    ID: 0,
    address: {
      state: '',
      country: '',
      city: '',
      street: '',
      houseNumber: 0,
      zip: 0,
    },
    notes: '',
  };
  @Input() btnText: string = 'submit';
  onSubmit({ valid, value }: NgForm) {
    if (valid) {
      this.submit.emit(value);
    }
  }

  resetForm(form: NgForm) {
    form.resetForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: {
        state: '',
        country: '',
        city: '',
        street: '',
        houseNumber: 0,
        zip: 0,
      },
      notes: '',
    });
    this.reset.emit();
  }
}
