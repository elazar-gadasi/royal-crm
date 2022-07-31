import { Injectable } from '@angular/core';
import { Contacts } from './contacts.component';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private Contacts: Array<Contacts> = [
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
      notes: 'a very good Contact!',
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
      notes: 'a very good Contact!',
    },
  ];
  constructor() {}
  getAll(): Contacts[] {
    return this.Contacts;
  }
}
