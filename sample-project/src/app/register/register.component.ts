import { Component } from '@angular/core';
import { UserModel } from '../models/usermodel';

@Component({
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  registerUserModel:UserModel=new UserModel();
  registerUser(){
    
  }
}
