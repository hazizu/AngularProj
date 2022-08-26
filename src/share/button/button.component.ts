import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() labelButton?:string
  @Output() clicked:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() styles:any = {}
  @Input() loading :boolean =  false

  options: AnimationOptions = {
    path: './../../assets/lotties/buttonLoding.json'
  };

  constructor() { }

  ngOnInit(): void {
  }
  getButtonValue(){
    this.clicked.emit()
  }
  
}
