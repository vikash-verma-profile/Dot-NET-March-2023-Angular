import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private _registerUrl="https://localhost:7293/api/Login/register";
  private _loginUrl="https://localhost:7293/api/Login/login";
  constructor(private http:HttpClient) { }

  loginUser(user:any){
    return this.http.post(this._loginUrl,user);
  }
  registerUser(user:any){
    return this.http.post(this._registerUrl,user);
  }
  getToken(){
    return localStorage.getItem('token');
  }
}
