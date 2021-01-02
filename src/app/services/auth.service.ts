import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authInfo$ = new BehaviorSubject<any>(null);

  constructor(private afAuth: AngularFireAuth) { 
    this.authInfo$.subscribe(console.log)

    this.afAuth.user.subscribe(user => {
      if(user) {
        this.authInfo$.next(user);
      }else { this.authInfo$.next(null)}
    })
  }

  register = (email: string, password: string) => {
    this.afAuth.createUserWithEmailAndPassword(email, password);
  }
}
