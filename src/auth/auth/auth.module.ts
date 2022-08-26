import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AuthComponent } from './auth/auth.component';
import { AuthRoutingModule } from './auth.routing';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShareModule } from 'src/share/share.module';
import { MatStepperModule } from '@angular/material/stepper';
import { ProvideRegisterComponent } from './provide-register/provide-register.component';
import { AuthHomeComponent } from './auth-home/auth-home.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    ProvideRegisterComponent,
    AuthHomeComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ShareModule,
    MatStepperModule,
  ]
})
export class AuthModule { }
