import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthPerfileRoutingModule } from './auth-perfile-routing.module';
import { AuthPerfileComponent } from './auth-perfile.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AuthPerfileComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthPerfileRoutingModule,
    SharedModule,
    //
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule

  ]
})
export class AuthPerfileModule { }
