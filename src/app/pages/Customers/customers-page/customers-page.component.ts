import { Component, OnInit } from '@angular/core';
import { DisplayModeControllers } from 'src/app/components/display-mode-controllers/display-mode-controllers';
import { Category } from 'src/app/components/search-bar/category';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'customers-page',
  templateUrl: './customers-page.component.html',
  styles: [],
})
export class CustomersPageComponent implements OnInit {
  customerRowData: Array<Customer> = [];
  customerData: Array<Customer> = [];
  unsubscribeGrtAll: Function = () => {};
  Customers: Array<Customer> = [];
  titel: string = 'Customers Page';
  subTitel: string = 'this is Customers page';
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
  constructor(private SC: CustomersService) {}
  deleteCustomer(array: Array<Customer>) {
    this.customerRowData = array;
    this.Customers = this.customerRowData;
  }

  onChangeDisplay(display: string) {
    this.display = display;
  }
  onSearch(array: Customer[]) {
    this.Customers = array;
  }
  ngOnInit() {
    this.SC.getAll((customers: Customer[], unsubscribeGetAll: Function) => {
      this.customerRowData = customers;
      this.customerData = customers;
      this.Customers = customers;
      this.dataReceived = true;
      this.unsubscribeGrtAll = unsubscribeGetAll;
    });
  }
}
