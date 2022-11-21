import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input/text-input.component';
import { EmailInputComponent } from './email-input/email-input.component';
import { SelectInputComponent } from './select-input/select-input.component';
import { TelInputComponent } from './tel-input/tel-input.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputErrorComponent } from './input-error/input-error.component';
import { ButtonComponent } from './button/button.component';

import { MatIconModule } from '@angular/material/icon';
import { SerchBarComponent } from './serch-bar/serch-bar.component';
import { ServiceProviderComponent } from './service-provider/service-provider.component';
import {FilterPipe } from '../_utils/filter.pipe'
import {ProvidersFilterPipe} from '../_pipe/providers-filter.pipe'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PersonalProviderPageComponent } from './personal-provider-page/personal-provider-page.component';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { OurSeviceCardesComponent } from './our-sevice-cardes/our-sevice-cardes.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';
import { TextAreaInputComponent } from './text-area-input/text-area-input.component';
import { ConfirmeComponent } from './confirme/confirme.component';
import { SelectClothesFormComponent } from './select-clothes-form/select-clothes-form.component';
import { ResumeCommandeComponent } from './resume-commande/resume-commande.component';
import { SucessAlertComponent } from './sucess-alert/sucess-alert.component';
import { LottieModule } from 'ngx-lottie';
import { ResumeCommandeMobileComponent } from './resume-commande-mobile/resume-commande-mobile.component';
import { AlertComponent } from './alert/alert.component';
import { WaitingLoadingComponent } from './waiting-loading/waiting-loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProfileComponent } from './profile/profile.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SelectCheckboxComponent } from './select-checkbox/select-checkbox.component';
import { MatSelectComponent } from './mat-select/mat-select.component';
import { ProviderDetailLoadingComponent } from './provider-detail-loading/provider-detail-loading.component';
import { ProviderItemLoadingComponent } from './provider-item-loading/provider-item-loading.component';








@NgModule({
  declarations: [
    EmailInputComponent,
    SelectInputComponent,
    PasswordInputComponent,
    InputErrorComponent,
    ButtonComponent,
    TextInputComponent,
    TelInputComponent,
    SerchBarComponent,
    ServiceProviderComponent,
    FilterPipe,
    ProvidersFilterPipe,
    PersonalProviderPageComponent,
    MenuMobileComponent,
    OurSeviceCardesComponent,
    ServicesPageComponent,
    ContactUsFormComponent,
    TextAreaInputComponent,
    ConfirmeComponent,
    SelectClothesFormComponent,
    ResumeCommandeComponent,
    SucessAlertComponent,
    ResumeCommandeMobileComponent,
    AlertComponent,
    WaitingLoadingComponent,
    ProfileComponent,
    CheckboxComponent,
    SelectCheckboxComponent,
    MatSelectComponent,
    ProviderDetailLoadingComponent,
    ProviderItemLoadingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    Ng2SearchPipeModule,
    NgxIntlTelInputModule,
    NgxPaginationModule,
    LottieModule,
    MatProgressSpinnerModule

  ],
  exports: [
    EmailInputComponent,
    SelectInputComponent,
    InputErrorComponent,
    PasswordInputComponent,
    ButtonComponent,
    TextInputComponent,
    TelInputComponent,
    SerchBarComponent,
    ServiceProviderComponent,
    PersonalProviderPageComponent,
    MenuMobileComponent,
    OurSeviceCardesComponent,
    ServicesPageComponent,
    ContactUsFormComponent,
    ConfirmeComponent,
    SelectClothesFormComponent,
    ResumeCommandeComponent,
    SucessAlertComponent,
    AlertComponent,
    ResumeCommandeMobileComponent,
    WaitingLoadingComponent,
    ProfileComponent,
    CheckboxComponent,
    SelectCheckboxComponent,
    ProviderDetailLoadingComponent
  ]
})
export class ShareModule { }
