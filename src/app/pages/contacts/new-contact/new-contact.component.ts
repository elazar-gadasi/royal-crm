import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contacts } from '../contacts.component';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'new-contact',
  templateUrl: './new-contact.component.html',
  styles: [],
})
export class NewContactComponent {
  constructor(private CS: ContactsService, private routerService: Router) {}

  // onSumbit(contact: Contacts) {
  //   this.CS.add(contact, () => this.routerService.navigate(['/contacts']));
  // }
  onSumbit(event: any) {
    if (event.firstName != undefined) {
      let contact: Contacts = {
        firstName: event.firstName,
        lastName: event.lastName,
        email: event.email,
        phone: event.phone,
        ID: event.ID,
        address: {
          state: event.address.state,
          country: event.address.country,
          city: event.address.city,
          street: event.address.street,
          houseNumber: event.address.houseNumber,
          zip: event.address.zip,
        },
        birthDay: event.birthDay,
      };
      this.CS.add(contact, () => this.routerService.navigate(['/contacts']));
    }
  }
}
