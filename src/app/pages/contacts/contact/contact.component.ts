import { Component, Input } from '@angular/core';
import { Contacts } from '../contacts.component';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @Input() Contacts: Array<Contacts> = [];

  constructor(private CS: ContactsService) {}

  delideContact(e: MouseEvent, id: string) {
    e.stopPropagation();
    this.CS.delide(id);
  }
}
