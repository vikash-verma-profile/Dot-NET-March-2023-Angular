import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { MasterComponent } from './home/master.component';
import {RouterModule} from '@angular/router';
import { MainRoutes } from './routes/routing.main';
import { AuthService } from './services/auth.service';
import { CustomerService } from './services/customer.service';

@NgModule({
  declarations: [
    CustomerComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [CustomerService,AuthService],
  bootstrap: [MasterComponent]
})
export class AppModule { }
