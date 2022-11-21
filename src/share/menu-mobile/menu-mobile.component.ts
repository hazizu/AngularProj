import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})
export class MenuMobileComponent implements OnInit {

  @Input() imgUrl?: string;
  @Input() text: string ="";
  @Input() styles:any ={}
  @Output() clicked:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() imagePosition:boolean = true
  @Input() icon:string =''
  @Input() isIconOrImg:boolean = true
  constructor() { }

  ngOnInit(): void {
  }
  getClicked(){
     this.clicked.emit()
  }

}
