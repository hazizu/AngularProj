import { ProviderDetailsComponent } from './provider-details/provider-details.component';
import { PersonalProviderPageComponent } from './../share/personal-provider-page/personal-provider-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvideRegisterComponent } from 'src/auth/auth/provide-register/provide-register.component';
import { ServicesPageComponent } from 'src/share/services-page/services-page.component';
import { SelectClothesFormComponent } from 'src/share/select-clothes-form/select-clothes-form.component';
import { ProfileComponent } from 'src/share/profile/profile.component';



const routes: Routes = [
    {
        path:'',component:HomeComponent,
        children:[
            {
                path:'accueil', component:HomePageComponent,
                
            },
            {
                path:'provider-details/:name', component:ProviderDetailsComponent,pathMatch:"full"
            },
            {
               path:'choix-vêtements', component:SelectClothesFormComponent,pathMatch:"full"
            },
            {
                path:'our-services', component:ServicesPageComponent,pathMatch:"full"
            },
                            
        ]      
    },
   
    
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
