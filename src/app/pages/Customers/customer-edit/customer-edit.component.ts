import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styles: [],
})
export class CustomerEditComponent implements OnInit {
  customer: Customer | any = undefined;
  id: string | null = null;
  createdAt: any | void = undefined;

  constructor(
    private CS: CustomersService,
    private AR: ActivatedRoute,
    private router: Router
  ) {}

  onSubmit(customer: Customer) {
    customer.createdAt = this.createdAt;
    customer._id = this.id!;
    // this.CS.edit(customer);
    this.CS.edit(customer, this.id!, () => {
      this.router.navigate(['/customers']);
    });
  }

  resetForm() {
    this.CS.getCustomer(this.id!, (customer: Customer) => {
      this.customer = customer;
    });
  }

  ngOnInit(): void {
    this.AR.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id');
      this.id = id;

      this.CS.getCustomer(id!, (customer: Customer) => {
        this.customer = customer;
        this.createdAt = customer.createdAt;
      });
    });
  }
}
//////////////////////////
