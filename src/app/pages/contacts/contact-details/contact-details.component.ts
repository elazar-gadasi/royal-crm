import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Contacts } from '../contacts.component';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: [],
})
export class ContactDetailsComponent implements OnInit {
  createdAd: any;
  contact: Contacts | void = undefined;
  constructor(private router: ActivatedRoute, private CS: ContactsService) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id');
      this.CS.getContact(id!, (contact: Contacts) => {
        this.contact = contact;
        this.createdAd = new Date(contact.createdAt?.seconds * 1000);
      });
      // if (contact) this.contact = contact;
    });
  }
}
