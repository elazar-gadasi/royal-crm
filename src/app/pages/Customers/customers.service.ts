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
      ID: 343434320,
      birthDay: '01/09/2000',
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
      ID: 343434320,
      birthDay: '01/05/2010',
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
  delide(id: string) {
    let customerIndex = this.customers.findIndex(
      (customer: Customer) => customer._id === id
    );
    if (customerIndex === -1) return;
    this.customers.splice(customerIndex, 1);
  }
  getCustomer(id: string, cb: Function): Customer | void {
    const customer = this.customers.find(
      (customerFromDb: Customer) => customerFromDb._id === id
    );
    return cb(customer);
  }
  edit(customer: Customer) {
    let index = this.customers.findIndex(
      (customerFromDb) => customerFromDb._id === customer._id
    );
    if (index === -1) return;
    this.customers[index] = customer;
  }
}
