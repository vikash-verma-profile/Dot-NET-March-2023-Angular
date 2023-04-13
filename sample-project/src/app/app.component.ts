import { Component } from '@angular/core';
import { Customer, Numbers } from './app.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   *
   */
  constructor(private http:HttpClient) {
   console.log("Hello i am constructor");

  }

  ngOnInit(){
    this.http.get('https://localhost:7293/api/Customer').subscribe(res=>this.success(res),res=>console.log(res));
  }

  success(res:any){
   this.CustomerModels=res;
  }
  GetCustomerData(){

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
   // this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel=new Customer();
  }
}
