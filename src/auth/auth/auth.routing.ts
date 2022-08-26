import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsFormComponent } from 'src/share/contact-us-form/contact-us-form.component';
import { ProfileComponent } from 'src/share/profile/profile.component';
import { AuthHomeComponent } from './auth-home/auth-home.component';
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
                path: 'home-auth',component:AuthHomeComponent,pathMatch:"full"


            },
            {
                path: 'register', component: RegisterComponent,pathMatch:"full"
            },
            {
                path:'provider-register', component:ProvideRegisterComponent,pathMatch:"full"
            },
            {
                path:'contactez-nous', component : ContactUsFormComponent,pathMatch:"full"
            
            },
            { 
               path:'profile',component :ProfileComponent,pathMatch:"full"
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
