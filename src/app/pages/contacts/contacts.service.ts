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
      birthDay: '07/07/2012',
      ID: 234234320,

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
      _id: '2',
      firstName: 'elazar',
      lastName: 'gadasi',
      email: 'elazar@gmail.com',
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
      notes: 'a very good Contact!',
    },
  ];
  constructor() {}
  getAll(): Contacts[] {
    return this.Contacts;
  }
  add(contacts: Contacts) {
    contacts._id = String(this.Contacts.length) + new Date() + Math.random();
    return this.Contacts.push({ ...contacts, createdAt: new Date() });
  }
  delide(id: string) {
    let contactIndex = this.Contacts.findIndex(
      (contact: Contacts) => contact._id === id
    );
    if (contactIndex === -1) return;
    this.Contacts.splice(contactIndex, 1);
  }
  getContact(id: string, cb: Function): Contacts | void {
    const contact = this.Contacts.find(
      (contactFromDb: Contacts) => contactFromDb._id === id
    );
    return cb(contact);
  }
  edit(Contact: Contacts) {
    let index = this.Contacts.findIndex(
      (contactFromDb) => contactFromDb._id === Contact._id
    );
    if (index === -1) return;
    this.Contacts[index] = Contact;
  }
}
