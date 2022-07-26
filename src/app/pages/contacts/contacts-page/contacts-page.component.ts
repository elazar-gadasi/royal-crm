import { Component } from '@angular/core';
import { Contacts } from '../contacts.component';

@Component({
  selector: 'contacts-page',
  templateUrl: './contacts-page.component.html',
  styles: [],
})
export class ContactsPageComponent {
  Contacts: Array<Contacts> = [];
  titel: string = 'Contacts Page';
  subTitel: string = 'this is Contacts page';
  icon: string = 'fas fa-users';
  constructor() {
    this.Contacts.push({
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
    });
  }
}
