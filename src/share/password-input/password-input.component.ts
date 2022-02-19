import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer, 
      useExisting: FormGroupDirective
    }
  ]
})

export class PasswordInputComponent implements OnInit {

 

  @Input() label?: string
  @Input() controlName:string;
  @Input() hide:boolean = true

  eyeOf:boolean=true;
  eyVisually:boolean=false;


  constructor() {
    this.controlName = ""
   }

  ngOnInit(): void {
  }
  showPass(){
    this.hide = !this.hide
    this.eyeOf = !this.eyeOf
    this.eyVisually = !this.eyVisually
  }
  hidePass(){
    this.hide = !this.hide
    this.eyVisually = !this.eyVisually
    this.eyeOf = !this.eyeOf
  }

}
