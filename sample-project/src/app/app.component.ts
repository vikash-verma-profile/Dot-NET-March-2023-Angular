import { Component } from '@angular/core';
import { Customer, Numbers } from './app.model';

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
  CustomerModel=new Customer();
  CustomerModels=new Array<Customer>();
  SayHi(){
    //alert("HI");
   console.log(this.NumberModel);
  }
  addCustomer(){
    console.log(this.CustomerModel);
    this.CustomerModels.push(this.CustomerModel);
    console.log(this.CustomerModels);
  }
}
