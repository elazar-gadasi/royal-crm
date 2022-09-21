import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styles: [],
})
export class CustomerDetailsComponent implements OnInit {
  createdAd: any;
  customer: Customer | void = undefined;
  constructor(private router: ActivatedRoute, private CS: CustomersService) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id');
      this.CS.getCustomer(id!, (customer: Customer) => {
        this.customer = customer;
        this.createdAd = new Date(customer.createdAt?.seconds * 1000);
      });
      // if (customer) this.customer = customer;
    });
  }
}
