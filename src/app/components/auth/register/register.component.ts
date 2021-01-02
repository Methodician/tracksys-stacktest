import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {AuthService} from 'src/app/services/auth.service'
@Component({
  selector: 'tks-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

 constructor(fb: FormBuilder, private authSvc: AuthService) {
    this.registerForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      // confirmPass: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  register = () => {
    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;
    console.log({email, password})
    if(!!email && !!password){
      this.authSvc.register(email, password);
    }
  }

}
