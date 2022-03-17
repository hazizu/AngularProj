import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-text-area-input',
  templateUrl: './text-area-input.component.html',
  styleUrls: ['./text-area-input.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer, 
      useExisting: FormGroupDirective
    }
  ]
})
export class TextAreaInputComponent implements OnInit {
  @Input() label?: string
  @Input() controlName: string

  constructor() {
    this.controlName = ""
   }

  ngOnInit(): void {
  }

}
