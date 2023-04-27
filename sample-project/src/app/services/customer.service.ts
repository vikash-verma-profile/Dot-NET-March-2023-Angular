import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class CustomerService {

  constructor(private http:HttpClient,private auth:AuthService) { }

  getCustomers(){
    return this.http.get('https://localhost:7293/api/Customer',{headers:{"Authorization":'Bearer '+this.auth.getToken()}});
  }
}
