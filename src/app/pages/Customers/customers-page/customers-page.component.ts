import { Component } from '@angular/core';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'customers-page',
  templateUrl: './customers-page.component.html',
  styles: [],
})
export class CustomersPageComponent {
  Customers: Array<Customer> = [];
  titel: string = 'Customers Page';
  subTitel: string = 'this is Customers page';
  icon: string = 'fas fa-users';
  constructor(SC: CustomersService) {
    this.Customers = SC.getAll();
  }
}
