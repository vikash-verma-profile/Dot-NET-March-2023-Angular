import { Component } from '@angular/core';
import { Customer, Numbers } from './customer.model';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../services/customer.service';

@Component({
  templateUrl: './customer.component.html',
})
export class CustomerComponent {

  /**
   *
   */
  constructor(private http:HttpClient,private custService:CustomerService) {
   console.log("Hello i am constructor");

  }

  ngOnInit(){
    this.custService.getCustomers().subscribe(res=>this.success(res),res=>console.log(res));
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

   var customerdata={
    "customerName":this.CustomerModel.customerName,
    "customerCode":this.CustomerModel.customerCode,
    "customerAmount":this.CustomerModel.customerAmount
   }
   this.http.post("https://localhost:7293/api/Customer",customerdata,)
    this.CustomerModel=new Customer();
  }

  hasError(typeofvalidator:string,controlname:string):Boolean{
    return this.CustomerModel.formCustomerGroup.controls[controlname].hasError(typeofvalidator);
  }
}
