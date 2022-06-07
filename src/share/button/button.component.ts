import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() labelButton?:string
  @Output() clicked:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() styles:any = {}

  constructor() { }

  ngOnInit(): void {
  }
  getButtonValue(){
    this.clicked.emit()
  }

}
