import { Component } from '@angular/core';
import { DisplayModeControllers } from 'src/app/components/display-mode-controllers/display-mode-controllers';
import { Category } from 'src/app/components/search-bar/category';
import { Contacts } from '../contacts.component';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'contacts-page',
  templateUrl: './contacts-page.component.html',
  styles: [],
})
export class ContactsPageComponent {
  contactRowData: Array<Contacts> = [];
  Contacts: Array<Contacts> = [];
  titel: string = 'Contacts Page';
  subTitel: string = 'this is Contacts page';
  icon: string = 'fas fa-users';
  categories: Array<Category> = [
    { name: 'First Name', value: 'firstName' },
    { name: 'Last name', value: 'lastName' },
    { name: 'Email', value: 'email' },
    { name: 'Phone', value: 'phone' },
    { name: 'Notes', value: 'notes' },
  ];
  controllers: Array<DisplayModeControllers> = [
    { icon: 'fa fa-table-list', value: 'table' },
    { icon: 'fa fa-folder', value: 'folder' },
  ];
  display: string = 'table';
  constructor(private SC: ContactsService) {
    this.Contacts = this.SC.getAll();
  }
  deleteContact(array: Array<Contacts>) {
    this.contactRowData = array;
    this.Contacts = this.contactRowData;
  }

  onChangeDisplay(display: string) {
    this.display = display;
  }
  onSearch(array: Contacts[]) {
    this.Contacts = array;
  }
  ngOnInit() {
    this.contactRowData = this.SC.getAll();

    this.Contacts = this.contactRowData;
  }
}
