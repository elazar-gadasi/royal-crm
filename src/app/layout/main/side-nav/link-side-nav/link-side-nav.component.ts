import { Component, Input } from '@angular/core';

@Component({
  selector: 'link-side-nav',
  templateUrl: './link-side-nav.component.html',
  styleUrls: ['./link-side-nav.component.scss'],
})
export class LinkSideNavComponent {
  @Input() text: string = '';
  @Input() icon: string = '';
  @Input() link: string = '';

  constructor() {}
}
