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
  updateDoc,
  serverTimestamp,
} from '@angular/fire/firestore';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  constructor(private Fs: Firestore) {}
  collectionRef: CollectionReference<DocumentData> = collection(
    this.Fs,
    'customers'
  );
  getAll(cb: Function) {
    let customers: any = [];
    const unsubscribeGetAll = onSnapshot(this.collectionRef, (snapShotData) => {
      snapShotData.docs.forEach((customer) => {
        customers.push({ ...customer.data(), _id: customer.id });
      });
    });

    return cb(customers, unsubscribeGetAll);
  }

  add(customer: Customer, cb: Function) {
    customer.createdAt = new Date();
    // customer.createdAt = serverTimestamp();
    addDoc(this.collectionRef, customer)
      .then(() => {
        cb();
      })
      .catch((error) => console.log(error));
  }
  delide(id: string) {
    const docRef = doc(this.Fs, 'customers', id);
    deleteDoc(docRef).catch((error) => console.log(error));
  }

  async getCustomer(id: string, cb: Function) {
    try {
      const docRef = doc(this.Fs, 'customers', id);
      const result = await getDoc(docRef);
      const customer = { ...result.data(), _id: result.id };
      cb(customer);
    } catch (error) {
      console.log(error);
    }
  }

  edit(customer: Customer, id: string, cb: Function) {
    const docRef = doc(this.Fs, 'customers', id);
    updateDoc(docRef, { ...customer })
      .then(() => cb())
      .catch((error) => console.log(error));
  }
}
