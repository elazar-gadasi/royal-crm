import { Component, Input, OnInit } from '@angular/core';
import { Contacts } from '../../contacts.component';

@Component({
  selector: 'app-contact-folders',
  templateUrl: './contact-folders.component.html',
  styles: [],
})
export class ContactFoldersComponent {
  @Input() contacts: Array<Contacts> = [];
}
