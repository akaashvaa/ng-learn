import { Routes } from '@angular/router';
import { SignInComponent } from './Register/sign-in/sign-in.component';
import { SignUpComponent } from './Register/sign-up/sign-up.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { ShoppingComponent } from './Shopping/shopping.component';
import { AuthService } from './Services/auth.service';
export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
    canActivate: [AuthService],
  },
  {
    path: 'auth/login',
    component: SignInComponent,
  },
  {
    path: 'auth/register',
    component: SignUpComponent,
  },
  {
    path: 'shopping',
    component: ShoppingComponent,
  },
];
