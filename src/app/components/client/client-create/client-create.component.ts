import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ClientI, stateCodesArray } from 'src/app/models/client.models';
import { ClientService } from 'src/app/services/client.service';

const zipCodeRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
const cityRegex = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;

@Component({
  selector: 'tks-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss'],
})
export class ClientCreateComponent implements OnInit {
  clientForm: FormGroup;
  filteredOptions: Observable<string[]>;

  constructor(fb: FormBuilder, private clientSvc: ClientService) {
    this.clientForm = fb.group({
      isActive: true,
      name: ['', Validators.required],
      formalName: ['', Validators.required],
      address1: ['', Validators.required],
      address2: '',
      city: ['', [Validators.required, Validators.pattern(cityRegex)]],
      state: ['', [Validators.required, this.matchInternalStateCodeList]],
      zipCode: ['', [Validators.required, Validators.pattern(zipCodeRegex)]],
    });

    this.filteredOptions = this.clientForm.controls['state'].valueChanges.pipe(
      startWith(''),
      map(val => this._stateFilter(val)),
    );
  }

  ngOnInit(): void {}

  submitClient = async () => {
    const client = this.clientForm.value as ClientI;

    if (!this.clientForm.valid) {
      alert('You made a boo boo');
      return;
    }

    const clientRef = await this.clientSvc.addClient(client);
    const clientId = clientRef.id;
    alert(`we would route you to the detail for client with id: ${clientId}`);
  };

  matchInternalStateCodeList: ValidatorFn = (control: AbstractControl) =>
    stateCodesArray.includes(control.value)
      ? null
      : { invalidStateCode: control.value };

  private _stateFilter = (value: string): string[] => {
    return stateCodesArray.filter(option =>
      option.toUpperCase().includes(value),
    );
  };
}
