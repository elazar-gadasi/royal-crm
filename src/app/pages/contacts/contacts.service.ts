import { Injectable } from '@angular/core';
import {
  addDoc,
  CollectionReference,
  deleteDoc,
  doc,
  DocumentData,
  Firestore,
  getDoc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';

import { Contacts } from './contacts.component';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  // private Contacts: Array<Contacts> = [
  //   {
  //     _id: '1',
  //     firstName: 'Regular',
  //     lastName: 'User',
  //     email: 'user@gmail.com',
  //     phone: '050-0000000',
  //     birthDay: '07/07/2012',
  //     ID: 234234320,

  //     address: {
  //       country: 'israel',
  //       city: 'tel-aviv',
  //       street: 'rotshild',
  //       houseNumber: 0,
  //       zip: 1234,
  //     },
  //     createdAt: new Date(),
  //     notes: 'a very good Contact!',
  //   },
  //   {
  //     _id: '2',
  //     firstName: 'elazar',
  //     lastName: 'gadasi',
  //     email: 'elazar@gmail.com',
  //     phone: '050-0000000',
  //     ID: 343434320,
  //     birthDay: '01/09/2000',

  //     address: {
  //       country: 'israel',
  //       city: 'tel-aviv',
  //       street: 'rotshild',
  //       houseNumber: 0,
  //       zip: 1234,
  //     },
  //     createdAt: new Date(),
  //     notes: 'a very good Contact!',
  //   },
  // ];
  constructor(private Fs: Firestore) {}
  collectionRef: CollectionReference<DocumentData> = collection(
    this.Fs,
    'contacts'
  );

  getAll() {
    let contacts: any = [];
    onSnapshot(this.collectionRef, (snapShotData) => {
      snapShotData.docs.forEach((contact) => {
        contacts.push({ ...contact.data(), _id: contact.id });
      });
    });

    return contacts;
  }

  add(contact: Contacts, cb: Function) {
    contact.createdAt = new Date();
    contact.createdAt = serverTimestamp();
    addDoc(this.collectionRef, contact)
      .then(() => {
        cb();
      })
      .catch((error) => console.log(error));
  }
  delide(id: string) {
    const docRef = doc(this.Fs, 'contacts', id);
    deleteDoc(docRef).catch((error) => console.log(error));
  }

  // delide(id: string) {
  //   let contactIndex = this.Contacts.findIndex(
  //     (contact: Contacts) => contact._id === id
  //   );
  //   if (contactIndex === -1) return;
  //   this.Contacts.splice(contactIndex, 1);
  // }
  async getContact(id: string, cb: Function) {
    try {
      const docRef = doc(this.Fs, 'contacts', id);
      const result = await getDoc(docRef);
      const contact = { ...result.data() };
      cb(contact);
    } catch (error) {
      console.log(error);
    }
  }

  edit(Contact: Contacts, id: string, cb: Function) {
    const docRef = doc(this.Fs, 'contacts', id);
    updateDoc(docRef, { ...Contact })
      .then(() => cb())
      .catch((error) => console.log(error));
  }
}
