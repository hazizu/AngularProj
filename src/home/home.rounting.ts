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
import { ProviderDetailLoadingComponent } from 'src/share/provider-detail-loading/provider-detail-loading.component';
import { ProviderItemLoadingComponent } from 'src/share/provider-item-loading/provider-item-loading.component';



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
               path:'choix-vêtements-prestataire/:id', component:SelectClothesFormComponent,pathMatch:"full"
            },
            {
                path:'our-services', component:ServicesPageComponent,pathMatch:"full"
            },
            {
                path:'loading',component:ProviderItemLoadingComponent, pathMatch:"full"
            }
                            
        ]      
    },
   
    
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
