import { Component, Input } from '@angular/core';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: [],
})
export class CustomerComponent {
  @Input() Customers: Array<Customer> = [];
  constructor(private CS: CustomersService) {}
  delideCustomer(e: MouseEvent, id: string) {
    e.stopPropagation();
    this.CS.delide(id);
  }
}
