import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer, 
      useExisting: FormGroupDirective
    }
  ]
})
export class EmailInputComponent implements OnInit {

  @Input() label?: string
  @Input() controlName:string;
  @Input() showError?:boolean = false
  @Input() MsgError:string="" 

  constructor() { 
    this.controlName="";
  }

 

  ngOnInit(): void {
  }

}
