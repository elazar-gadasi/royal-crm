import { Component, Input, Output } from '@angular/core';

import { EventEmitter } from '@angular/core';

import { ContactsService } from '../../contacts.service';

@Component({
  selector: 'contact-tabel',
  templateUrl: './contact.component.html',
  styleUrls: [],
})
export class ContactTabelComponent {
  @Input() Contacts: any = [];
  @Output() onDeleteContact = new EventEmitter();
  constructor(private CS: ContactsService) {
    this.Contacts = CS.getAll();
  }

  delideContact(e: MouseEvent, id: string) {
    e.stopPropagation();
    this.CS.delide(id);
    this.Contacts = this.CS.getAll();

    this.onDeleteContact.emit(this.Contacts);
  }
}
