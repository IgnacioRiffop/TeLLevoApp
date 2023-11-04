import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { ModuloModule } from '../modulo/modulo.module';
import { CustomInputComponent } from '../custom-input/custom-input.component';
import { provideAuth, getAuth } from '@angular/fire/auth';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ModuloModule,
  ],
  declarations: [LoginPage, CustomInputComponent]
})
export class LoginPageModule {}
