import { Component, OnInit } from '@angular/core';
import { ClientI } from 'src/app/models/client.models';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'tks-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss'],
})
export class ListClientsComponent implements OnInit {
  clients: ClientI[] = [];

  displayedColumns = {
    name: 'Name',
    city: 'City',
    state: 'State',
    zipCode: 'Zip Code',
  };

  displayedColumnKeys = Object.keys(this.displayedColumns);

  constructor(private clientSvc: ClientService) {}

  ngOnInit(): void {
    this.clientSvc
      .clientsCollection()
      .valueChanges()
      .subscribe(clients => (this.clients = clients));
  }
}
