import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MasterComponent } from './home/master.component';
import {RouterModule} from '@angular/router';
import { MainRoutes } from './routes/routing.main';
import { AuthService } from './services/auth.service';
import { CustomerService } from './services/customer.service';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { GridComponent } from './utility/grid/grid.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [CustomerService,AuthService,AuthGaurdService],
  bootstrap: [MasterComponent]
})
export class AppModule { }
