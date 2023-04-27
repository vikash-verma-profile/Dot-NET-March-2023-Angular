export class Numbers{
    Number1:Number=0;
    Number2:Number=0;
}

import { NgForm,FormGroup,FormControl,Validators,FormBuilder } from "@angular/forms";

export class Customer{
    customerCode:string='';
    customerName:string='';
    customerAmount:Number=0;
    formCustomerGroup:FormGroup;

    constructor(){
        var _builder=new FormBuilder();
        this.formCustomerGroup=_builder.group({});
        this.formCustomerGroup.addControl("CustomerNameControl",new FormControl('',Validators.required));

        var validationcollection=[];
        //required and 4 letter
        validationcollection.push(Validators.required);
        validationcollection.push(Validators.pattern("^[0-9]{4,4}$"));
        this.formCustomerGroup.addControl("CustomerCodeControl",new FormControl('',Validators.compose(validationcollection)))
    }
}