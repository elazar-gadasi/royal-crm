import { Component, Input } from '@angular/core';
import { Contacts } from '../../contacts.component';

@Component({
  selector: 'app-contact-cards',
  templateUrl: './contact-cards.component.html',
  styles: [],
})
export class ContactCardsComponent {
  @Input() contacts: Array<Contacts> = [];
}
