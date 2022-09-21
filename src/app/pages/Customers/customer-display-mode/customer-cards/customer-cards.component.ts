import { Component, Input } from '@angular/core';
import { Customer } from '../../customer';

@Component({
  selector: 'app-customer-cards',
  templateUrl: './customer-cards.component.html',
  styles: [],
})
export class CustomerCardsComponent {
  @Input() customers: Array<Customer> = [];
}
