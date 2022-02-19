import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer, 
      useExisting: FormGroupDirective
    }
  ]
})
export class TextInputComponent implements OnInit {

 @Input() label?: string
 @Input() controlName: string
  constructor() {
    this.controlName = ""
   }

  ngOnInit(): void {
  }

}
