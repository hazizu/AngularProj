import { ShareModule } from 'src/share/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home.rounting';
import { HomePageComponent } from './home-page/home-page.component';
import { ProviderDetailsComponent } from './provider-details/provider-details.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomePageComponent,
    ProviderDetailsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShareModule
  ]
})
export class HomeModule { }

