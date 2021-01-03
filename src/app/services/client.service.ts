import { Injectable } from '@angular/core';
import { ClientI } from '../models/client.models';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  addClient = (client: ClientI ) => {
    console.log('add me to the database!', client);
  }
}
