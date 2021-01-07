import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ClientI } from '../models/client.models';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private afd: AngularFirestore) {}

  // FIRESTORE COLLECTIONS
  clientsCollection = () => this.afd.collection<ClientI>('clients');
  // end firestore collections

  // FIRESOTRE DOCUMENTS
  clientsDocument = (clientId: string) =>
    this.clientsCollection().doc(clientId);
  // end firestore documents

  addClient = async (client: ClientI) => {
    const docRef = await this.clientsCollection().add(client);
    return docRef;
  };
}
