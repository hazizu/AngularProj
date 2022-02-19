import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { ProvideRegisterComponent } from './provide-register/provide-register.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path:'',component:AuthComponent,
        children: [
            {
                path: '', component:LoginComponent,pathMatch:"full"
            }
            ,
            {
                path: 'register', component: RegisterComponent,pathMatch:"full"
            },
            {
                path:'provider-register', component:ProvideRegisterComponent,pathMatch:"full"
            }
           
        ]
    },
    // {
    //     path:'provide-register', component:ProvideRegisterComponent,
    // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
