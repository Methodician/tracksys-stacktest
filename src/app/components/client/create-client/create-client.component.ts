import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ClientI, StateCodeM } from 'src/app/models/client.models';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'tks-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss'],
})
export class CreateClientComponent implements OnInit {
  clientForm: FormGroup;
  stateCodes: string[];
  filteredOptions: Observable<string[]>;

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
    });

    this.stateCodes = Array.from(StateCodeM).map(state => state[0]);

    this.filteredOptions = this.clientForm.controls['state'].valueChanges.pipe(
      startWith(''),
      map(val => this._stateFilter(val)),
    );
  }

  ngOnInit(): void {}

  submitClient = () => {
    if (!this.clientForm.valid) {
      alert('You made a boo boo');
    }
    const client = this.clientForm.value as ClientI;

    this.clientSvc.addClient(client);
  };

  checkState = () => {
    // To really secure data against user error we can also add
    // custom validators to invalidate the form if a bad state is input
    // Else, if the user submits 1 second after putting an incorrect state it may go through to DB
    // Alternatively we can just rely on back-end validation beyond this entry, which I prefer for simplicity and reliability
    setTimeout(() => {
      const selection = this.clientForm.get('state')?.value;
      const isValid = this.stateCodes.includes(selection);
      if (!isValid) this.clientForm.patchValue({ state: '' });
    }, 1000);
  };

  private _stateFilter = (value: string): string[] => {
    return this.stateCodes.filter(option =>
      option.toUpperCase().includes(value),
    );
  };
}
