import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   *
   */
  constructor() {
   console.log("Hello i am constructor");

  }
  title = 'sample-project';
  name='My Name is VIkash Verma'

  SayHi(){
    alert("HI");
  }
}
