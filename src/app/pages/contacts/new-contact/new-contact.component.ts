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

  onSumbit(contact: Contacts) {
    this.CS.add(contact, () => this.routerService.navigate(['/contacts']));
  }
}
