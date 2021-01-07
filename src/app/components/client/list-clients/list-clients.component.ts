import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

import { ClientI } from 'src/app/models/client.models';
import { ClientService } from 'src/app/services/client.service';
@Component({
  selector: 'tks-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'),
      ),
    ]),
  ],
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

  expandedElement: ClientI | null = null;

  constructor(private clientSvc: ClientService) {}

  ngOnInit(): void {
    this.clientSvc
      .clientsCollection()
      .valueChanges()
      .subscribe(clients => (this.clients = clients));
  }
}
