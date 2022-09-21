import { Injectable } from '@angular/core';
import {
  collection,
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
// import { collection } from '@firebase/firestore';

import { Contacts } from './contacts.component';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private Fs: Firestore) {}
  collectionRef: CollectionReference<DocumentData> = collection(
    this.Fs,
    'contacts'
  );

  getAll(cb: Function) {
    let contacts: any = [];
    const unsubscribeGetAll = onSnapshot(this.collectionRef, (snapShotData) => {
      snapShotData.docs.forEach((contact) => {
        contacts.push({ ...contact.data(), _id: contact.id });
      });
    });

    return cb(contacts, unsubscribeGetAll);
  }

  add(contact: Contacts, cb: Function) {
    contact.createdAt = new Date();
    // contact.createdAt = serverTimestamp();

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
      const contact = { ...result.data(), _id: result.id };
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
