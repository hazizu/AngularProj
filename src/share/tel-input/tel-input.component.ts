import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { CountryISO } from 'ngx-intl-tel-input';


@Component({
  selector: 'app-tel-input',
  templateUrl: './tel-input.component.html',
  styleUrls: ['./tel-input.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class TelInputComponent implements OnInit {
   @Input() controlName:string="";
   @Input() label?:string;
   countryIso = CountryISO;
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
