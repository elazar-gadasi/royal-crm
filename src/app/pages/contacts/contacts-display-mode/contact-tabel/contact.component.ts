import { Component, Input, Output } from '@angular/core';

import { EventEmitter } from '@angular/core';
import { Contacts } from '../../contacts.component';

import { ContactsService } from '../../contacts.service';

@Component({
  selector: 'contact-tabel',
  templateUrl: './contact.component.html',
  styleUrls: [],
})
export class ContactTabelComponent {
  @Input() Contacts: Contacts[] = [];
  @Output() onDeleteContact = new EventEmitter();
  constructor(private CS: ContactsService) {
    // this.Contacts = CS.getAll();
  }

  delideContact(e: MouseEvent, id: string) {
    e.stopPropagation();
    this.CS.delide(id);
    this.CS.getAll((contacts: Contacts[]) => {
      this.Contacts = contacts;

      this.onDeleteContact.emit(this.Contacts);
    });
  }
}
