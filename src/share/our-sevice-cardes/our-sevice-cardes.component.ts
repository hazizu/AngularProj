import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-sevice-cardes',
  templateUrl: './our-sevice-cardes.component.html',
  styleUrls: ['./our-sevice-cardes.component.scss']
})
export class OurSeviceCardesComponent implements OnInit {
  @Input() image:string=""
  @Input() title:string=""
  @Input() description =""

  constructor() { }

  ngOnInit(): void {
  }

}
