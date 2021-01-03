import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ClientI} from 'src/app/models/client.models';
import {ClientService} from 'src/app/services/client.service'

@Component({
  selector: 'tks-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {
  clientForm: FormGroup;

  constructor(fb: FormBuilder, private clientSvc: ClientService) {
    this.clientForm = fb.group({
      isActive: true,
      name: ['', Validators.required],
      formalName: ['', Validators.required],
      address1: ['', Validators.required],
      address2: '',
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  submitClient = () => {
    const isActive = this.clientForm.get('isActive')?.value;
    const name = this.clientForm.get('name')?.value;
    const formalName = this.clientForm.get('formalName')?.value;
    const address1 = this.clientForm.get('address1')?.value;
    const address2 = this.clientForm.get('address2')?.value;
    const city = this.clientForm.get('city')?.value;
    const state = this.clientForm.get('state')?.value;
    const zipCode = this.clientForm.get('zipCode')?.value;

    const client: ClientI = { isActive, name, formalName, address1, address2, city, state, zipCode};
    this.clientSvc.addClient(client);

  }

}
