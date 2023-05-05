import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomerService } from '../services/customer.service';
import { AuthService } from '../services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerRoutes } from '../routes/customer.route';
import { CommonModule } from '@angular/common';
import { GridComponent } from '../utility/grid/grid.component';

@NgModule({
  declarations: [
  CustomerComponent,
  GridComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(CustomerRoutes)
  ],
  providers: [CustomerService,AuthService],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
