import { Component } from '@angular/core';

import { UserService } from 'src/app/pages/Users/user.service';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styles: [],
})
export class LoggedComponent {
  constructor(private US: UserService) {}
  nameUser: any = this.US.showName();
  logout() {
    this.US.logout();
  }
}
