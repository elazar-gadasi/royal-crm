import { Time } from '@angular/common';
import { Timestamp } from '@angular/fire/firestore';
import { TimeInterval } from 'rxjs';
import { Address } from 'src/app/interfaces/address';

export interface Contacts {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt?: any;
  address: Address;
  notes?: string;
  ID: number;

  birthDay: string;
}
