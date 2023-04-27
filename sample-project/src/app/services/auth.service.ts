import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private _registerUrl="https://localhost:7293/api/Login/register";
  private _loginUrl="https://localhost:7293/api/Login/login";
  constructor(private http:HttpClient,private _router:Router) { }

  loginUser(user:any){
    return this.http.post(this._loginUrl,user);
  }
  registerUser(user:any){
    return this.http.post(this._registerUrl,user);
  }
  getToken(){
    return localStorage.getItem('token');
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  logOut(){
    localStorage.removeItem('token');
    this._router.navigate(['/']);
  }
}
