import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientI } from 'src/app/models/client.models';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'tks-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss'],
})
export class ClientEditComponent implements OnInit {
  client?: ClientI;

  constructor(
    private activeRoute: ActivatedRoute,
    private clientSvc: ClientService,
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      if (params['id']) {
        this.clientSvc
          .clientsDocument(params['id'])
          .valueChanges({ idField: 'id' })
          .subscribe(client => (this.client = client));
      }
    });
  }
}
