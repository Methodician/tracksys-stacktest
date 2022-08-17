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
import { Router } from '@angular/router';

@Component({
  selector: 'tks-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
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
export class ClientListComponent implements OnInit {
  clients: ClientI[] = [];

  displayedColumns = {
    name: 'Name',
    city: 'City',
    state: 'State',
    zipCode: 'Zip Code',
  };

  displayedColumnKeys = Object.keys(this.displayedColumns);

  expandedClient: ClientI | null = null;

  constructor(private router: Router, private clientSvc: ClientService) {}

  ngOnInit(): void {
    this.clientSvc
      .clientsCollection()
      .valueChanges({ idField: 'id' })
      .subscribe(clients => (this.clients = clients));
  }

  editClient = ($e: MouseEvent, client: ClientI) => {
    $e.stopPropagation();
    this.router.navigateByUrl(`/clients/${client.id}`);
  };
}
