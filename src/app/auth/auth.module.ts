import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../core/material.module';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from './../shared/shared.module';

import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class AuthModule {}
