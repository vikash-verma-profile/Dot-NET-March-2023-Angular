import { Component } from '@angular/core';
import { Numbers } from './app.model';

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

  imageUrl="./assets/Image1.jpg";

  NumberModel=new Numbers();

  SayHi(){
    //alert("HI");
   console.log(this.NumberModel);
  }
}
