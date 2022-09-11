import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Contacts } from '../contacts.component';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styles: [],
})
export class ContactEditComponent implements OnInit {
  contact: Contacts | any = undefined;
  id: string | null = null;
  createdAt: Date | void = undefined;

  constructor(
    private CS: ContactsService,
    private AR: ActivatedRoute,
    private router: Router
  ) {}

  onSubmit(contact: Contacts) {
    contact.createdAt = this.createdAt!;
    // contact._id = this.id!;
    this.CS.edit(contact, this.id!, () => this.router.navigate(['/contacts']));
  }

  resetForm() {
    this.CS.getContact(this.id!, (contact: Contacts) => {
      this.contact = contact;
    });
  }

  ngOnInit(): void {
    this.AR.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id');
      this.id = id;

      this.CS.getContact(id!, (contact: Contacts) => {
        this.contact = contact;
        this.createdAt = contact.createdAt;
      });
    });
  }
}
