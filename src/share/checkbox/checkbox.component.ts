import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input()data!: { libelle: string; id: string; };
  @Input() isChecked:any
  @Output() isCheckedData:EventEmitter<{id:string,state:boolean,libelle:string}> = new EventEmitter<{id:string,state:boolean,libelle:string}>();

  constructor() { }

  ngOnInit(): void {
  }
  getChecked(data:any){
    this.isCheckedData.emit({id: data.id,libelle:data.libelle, state:this.isChecked})
    console.log({id: data.id, state:this.isChecked, libelle:data.libelle})
  }


}
