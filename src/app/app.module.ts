import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/_contants/store.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxPaginationModule } from 'ngx-pagination';
import { LottieModule } from 'ngx-lottie';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {SocialLoginModule,SocialAuthServiceConfig} from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { TokenInterceptor } from 'src/_utils/interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



export function playerFactory(): any {
  return import('lottie-web');
}




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgxPaginationModule,
    MatProgressSpinnerModule,
    SocialLoginModule,
    HttpClientModule,
    LottieModule.forRoot({player:playerFactory}),

    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('615053041632-4emc7c2crotttfqallu0hl1kne76dr6m.apps.googleusercontent.com'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi: true 
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }








































