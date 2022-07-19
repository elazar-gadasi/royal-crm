import { Address } from 'src/app/interfaces/address';

export interface Contacts {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt?: Date;
  address: Address;
  notes?: string;
}
