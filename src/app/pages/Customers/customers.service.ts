import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private customers: Array<Customer> = [
    {
      _id: '1',
      firstName: 'Regular',
      lastName: 'User',
      email: 'user@gmail.com',
      phone: '050-0000000',
      address: {
        country: 'israel',
        city: 'tel-aviv',
        street: 'rotshild',
        houseNumber: 0,
        zip: 1234,
      },
      createdAt: new Date(),
      notes: 'a very good Customer!',
    },
    {
      _id: '1',
      firstName: 'Regular',
      lastName: 'User',
      email: 'user@gmail.com',
      phone: '050-0000000',
      address: {
        country: 'israel',
        city: 'tel-aviv',
        street: 'rotshild',
        houseNumber: 0,
        zip: 1234,
      },
      createdAt: new Date(),
      notes: 'a very good Customer!',
    },
  ];
  constructor() {}
  getAll(): Customer[] {
    return this.customers;
  }
  add(customer: Customer) {
    customer._id = String(this.customers.length) + new Date() + Math.random();
    return this.customers.push({ ...customer, createdAt: new Date() });
  }
}
