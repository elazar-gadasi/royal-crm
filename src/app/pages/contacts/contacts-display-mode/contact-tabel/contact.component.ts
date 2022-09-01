import { Component, Input } from '@angular/core';
import { Contacts } from '../../contacts.component';
import { ContactsService } from '../../contacts.service';

@Component({
  selector: 'contact-tabel',
  templateUrl: './contact.component.html',
  styleUrls: [],
})
export class ContactTabelComponent {
  @Input() Contacts: Array<Contacts> = [];

  constructor(private CS: ContactsService) {}

  delideContact(e: MouseEvent, id: string) {
    e.stopPropagation();
    this.CS.delide(id);
  }
}
