import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'master',
  templateUrl: './master.component.html'
})
export class MasterComponent {

  isLoggedIn=false;
  constructor(private auth:AuthService){
    
    this.isLoggedIn=!this.auth.loggedIn();
    console.log(this.isLoggedIn);
  }
  logout(){
    this.auth.logOut();
    window.location.reload();
  }
}
