import { Component } from '@angular/core';
import { Contacts } from '../contacts.component';
import { ContactsService } from '../contacts.service';

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
  constructor(SC: ContactsService) {
    this.Contacts = SC.getAll();
  }
}
