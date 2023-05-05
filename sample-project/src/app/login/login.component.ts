import { Component } from '@angular/core';
import { UserModel } from '../models/usermodel';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private auth:AuthService,private _router:Router){}

  loginUserModel:UserModel=new UserModel();

  loginUser(){
    this.auth.loginUser(this.loginUserModel).subscribe((res:any)=>{
      console.log(res);
      localStorage.setItem('token',res.token);
      this._router.navigate(['/customer/add']);
    },
    res=>console.log(res));
  }
}
