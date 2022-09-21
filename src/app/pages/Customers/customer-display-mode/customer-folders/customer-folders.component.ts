import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../../customer';

@Component({
  selector: 'app-customer-folders',
  templateUrl: './customer-folders.component.html',
  styleUrls: ['./customer-folders.component.scss'],
})
export class CustomerFoldersComponent {
  @Input() customers: Array<Customer> = [];
}
