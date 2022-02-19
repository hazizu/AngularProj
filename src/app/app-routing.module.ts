import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from 'src/auth/auth/auth/auth.component';
import { LoginComponent } from 'src/auth/auth/login/login.component';

const routes: Routes = [
    {
      path : '', 
      loadChildren: () => import('./../auth/auth/auth.module').then(mod => mod.AuthModule)
    },
    {
      path:'home',
      loadChildren: () => import('./../home/home.module').then(mod => mod.HomeModule)

    },
     { path: '**', loadChildren: () => import('./../auth/auth/auth.module').then(mod => mod.AuthModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
