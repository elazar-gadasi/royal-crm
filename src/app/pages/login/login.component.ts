import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  onSubmit({ value, valid }: NgForm) {
    console.log(value);
    console.log(valid);
  }

  resetForm(form: NgForm) {
    form.resetForm();
  }
}
