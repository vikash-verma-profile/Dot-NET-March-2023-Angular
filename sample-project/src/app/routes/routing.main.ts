import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AuthGaurdService } from '../services/auth-gaurd.service';

export const MainRoutes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'customer',canActivate:[AuthGaurdService], loadChildren:()=>import('../customer/customer.module').then(m=>m.CustomerModule) },
];
