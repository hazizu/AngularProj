import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-checkbox',
  templateUrl: './select-checkbox.component.html',
  styleUrls: ['./select-checkbox.component.scss']
})
export class SelectCheckboxComponent implements OnInit {
  @Input() lists: any[] = [];
  @Input() libelle?:string
  @Output() getcheked:EventEmitter<boolean> = new EventEmitter<boolean>();
  show?:boolean = false;

  selectedList:any[] = [];
  finalSelecteds:any[] = [];
   constructor() { }
  
  ngOnInit(): void {
  }

  showList(){ 
    this.show = true
    // console.log(this.selectedList.diff(this.lists));
    let  intersections = this.lists.filter(e => this.selectedList.indexOf(e) !== -1);
    console.log('same',intersections)
  }
  closeListContainer(){
    this.show = false  
    this.selectedList.forEach((item)=>{
      this.finalSelecteds.push(item)

    })
    console.log(this.finalSelecteds)
  }

  // getChecked(data:any,index:number){
  //   switch(data.state){
  //     case true:
  //       this.selectedList.push(data)
  //       console.log(this.selectedList)
  //       break;
  //     case false:
  //       console.log(index)
  //       this.selectedList.splice(index, 1)
  //       console.log(this.selectedList)
  //       break;
  //   }

  // }

  getChecked(data:any,index:number){
    if(data.state){
      this.selectedList.push(data)
      console.log(this.selectedList)
      this.getcheked.emit(data)
    }else{
      this.selectedList.forEach((element:any)=>{
        if(data.libelle === element.libelle){
          this.selectedList.splice(this.selectedList.indexOf(element), 1)
          console.log(this.selectedList)
        }
      })
        
    }
  }

}

