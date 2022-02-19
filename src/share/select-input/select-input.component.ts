import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer, 
      useExisting: FormGroupDirective
    }
  ]
})
export class SelectInputComponent implements OnInit {
  @Input() homme: string=""
  @Input() femme:string=""
  @Input() label:string=""
  constructor() { }

  ngOnInit(): void {
  }

}
