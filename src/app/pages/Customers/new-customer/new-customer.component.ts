import { Component } from '@angular/core';
import {  Router } from '@angular/router';

import { Customer } from '../customer';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styles: [],
})
export class NewCustomerComponent {
  constructor(private CS: CustomersService, private routerService: Router) {}

  onSumbit(customer: Customer) {
    this.CS.add(customer);
    this.routerService.navigate(['/customers']);
  }
}
