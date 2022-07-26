import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent {
  @Input() titel: string = '';
  @Input() subTitel: string = '';
  @Input() icon: string = '';
  @Input() bgColor: string = '';
  constructor() {}
}
