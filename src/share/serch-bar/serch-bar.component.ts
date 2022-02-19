import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-serch-bar',
  templateUrl: './serch-bar.component.html',
  styleUrls: ['./serch-bar.component.scss']
})
export class SerchBarComponent implements OnInit {
 @Input() seachPlacholder?:string;
 @Input() searchValue?:string
  constructor() { }

  ngOnInit(): void {
  }

}
