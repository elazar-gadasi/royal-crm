import { Component, Input } from '@angular/core';
import { Contacts } from '../contacts.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @Input() Contacts: Array<Contacts> = [];

  constructor() {}
}
