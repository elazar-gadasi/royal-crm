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
      link: 'contacts',
    },
    {
      text: 'link-customers',
      icon: 'fas fa-address-book',
      link: 'customers',
    },
  ];
  constructor() {}
}
