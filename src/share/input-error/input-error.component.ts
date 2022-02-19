import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.scss']
})
export class InputErrorComponent implements OnInit {
  @Input() errorLabel:string="";
  @Input() icon:string="";
  @Input() showAlert?:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}