import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGaurdService implements CanActivate {

  constructor(private auth:AuthService,private _router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.auth.loggedIn()){
      return true;
    }
    else{
      this._router.navigate(['/login'])
      return false;
    }
  }
}
