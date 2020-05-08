import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './containers/register/register.component';
import { LoginComponent } from './containers/login/login.component';

const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: '', pathMatch: 'full', redirectTo: 'login',
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'register', component: RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
