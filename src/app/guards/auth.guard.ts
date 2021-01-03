import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {AuthService} from '../services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private router: Router){}

  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      return this.afAuth.user.pipe(map(user => {
        if (!! user && !!(user as any).uid){
         return true
        }else {

          this.router.navigateByUrl('/login');
          return false
        }
      }))
      
  }
  
}
