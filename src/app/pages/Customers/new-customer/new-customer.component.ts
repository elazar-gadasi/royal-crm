import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Customer } from '../customer';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styles: [],
})
export class NewCustomerComponent {
  constructor(private CS: CustomersService, private routerService: Router) {}

  // onSumbit(customer: Customer) {
  //   this.CS.add(customer, () => this.routerService.navigate(['/customers']));
  // }

  onSumbit(event: any) {
    if (event.firstName != undefined) {
      let customer: Customer = {
        firstName: event.firstName,
        lastName: event.lastName,
        email: event.email,
        phone: event.phone,
        ID: event.ID,
        address: {
          state: event.address.state,
          country: event.address.country,
          city: event.address.city,
          street: event.address.street,
          houseNumber: event.address.houseNumber,
          zip: event.address.zip,
        },
        birthDay: event.birthDay,
      };
      this.CS.add(customer, () => this.routerService.navigate(['/customers']));
    }
  }
}
