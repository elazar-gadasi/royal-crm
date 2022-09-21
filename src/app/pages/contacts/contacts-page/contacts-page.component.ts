import { Component, OnInit, OnDestroy } from '@angular/core';
import { DisplayModeControllers } from 'src/app/components/display-mode-controllers/display-mode-controllers';
import { Category } from 'src/app/components/search-bar/category';
import { Contacts } from '../contacts.component';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'contacts-page',
  templateUrl: './contacts-page.component.html',
  styles: [],
})
export class ContactsPageComponent implements OnInit, OnDestroy {
  unsubscribeGrtAll: Function = () => {};
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
    { icon: 'fa fa-id-card', value: 'cards' },
  ];
  display: string = 'table';
  dataReceived: boolean = false;
  constructor(private SC: ContactsService) {}
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
    this.SC.getAll((contacts: Contacts[], unsubscribeGetAll: Function) => {
      this.contactRowData = contacts;
      this.Contacts = this.contactRowData;
      this.dataReceived = true;
      this.unsubscribeGrtAll = unsubscribeGetAll;
    });
  }
  ngOnDestroy() {
    this.unsubscribeGrtAll();
  }
}
