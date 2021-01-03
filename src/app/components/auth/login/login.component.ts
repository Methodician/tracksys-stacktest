import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { StateCodeM } from 'src/app/models/client.models'

@Component({
  selector: 'tks-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoggedIn = false;

   constructor(fb: FormBuilder, private authSvc: AuthService) {
    this.loginForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
   }

  ngOnInit(): void {
    this.authSvc.authInfo$.subscribe(authInfo => {
      console.log(authInfo)
      this.isLoggedIn = !!authInfo
    })

    Object.entries(StateCodeM).map(([code, value]) => {
      console.log({code, value})
    })
  }

  logout = () => this.authSvc.logout()

  login = () => {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    this.authSvc.login(email, password);
  }

}
