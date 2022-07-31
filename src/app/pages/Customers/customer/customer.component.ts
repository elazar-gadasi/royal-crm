import { Component, Input } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: [],
})
export class CustomerComponent {
  @Input() Customers: Array<Customer> = [];
  constructor() {}
}
