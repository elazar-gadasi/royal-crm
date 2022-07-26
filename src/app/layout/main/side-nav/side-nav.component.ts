import { Component } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styles: [],
})
export class SideNavComponent {
  links: Array<{ text: any; icon: any; link: any }> = [
    {
      text: 'link-contacts',
      icon: 'fas fa-users',
      link: '../../../pages/contacts/contacts-page/contacts-page.component.html',
    },
    {
      text: 'link-customers',
      icon: 'fas fa-users',
      link: '../../../pages/Customers/customers-page/customers-page.component.html',
    },
  ];
  constructor() {}
}
