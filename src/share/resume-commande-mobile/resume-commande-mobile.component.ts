import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { reducers } from 'src/_contants/store.reducers';
import { AppStore } from 'src/_enumes/stores.enum';
import { SucessAlertComponent } from '../sucess-alert/sucess-alert.component';

@Component({
  selector: 'app-resume-commande-mobile',
  templateUrl: './resume-commande-mobile.component.html',
  styleUrls: ['./resume-commande-mobile.component.scss']
})
export class ResumeCommandeMobileComponent implements OnInit {
  @Input() resumeTitle?:String
  @Input() elementLibelle?:String
  @Input() elementQte?:number
  @Input() elementPrice?:number
  @Input() resumePrice?:number
  @Input() resumeArray?:any
  commandeData$?:Observable<any>
  commandeData:any
  showUpdateContainer:boolean = false
  selectedItem:any
  elementQuantite:any
  open:boolean = false


  constructor(private dialog:MatDialog, public dialModalRef:MatDialogRef<any>,
    public dialogRef: MatDialogRef<ResumeCommandeMobileComponent>, @Inject(MAT_DIALOG_DATA) public data: any, 
    private store: Store<typeof reducers>) { }

  ngOnInit(): void {


    this.commandeData$ = this.store.select(AppStore.commandeData).pipe(
      map(
        (state:any)=>{
          return state.commandeData;
        }
      )
    )
    this.commandeData$.subscribe((res)=>{
      this.commandeData = res
      console.log("commandeData select",this.commandeData)
    })

  }
  

  calculeGlobale(){
    if(this.data.length){
      const price = this.data.map((item:any )=> item.price).reduce((prev:any, curr:any) => prev + curr,0);
      return price
    }
  }

  valideCommande(){
    
    this.dialog.open(SucessAlertComponent,{
      panelClass: 'mat-dialog-container',
      data:{
        successTitle:"Validé !",
        successMessage:"Félicitation votre panier à linge nous est parvenu. Le prestataire vous contactera dans un instant."
      },
     
    })
   }

   updateElement(element:any,index:number){
    this.selectedItem = index;
    this.elementQuantite = element.quantite
    this.open = true
    
   }
   fermer(index:number){
     this.open = false
     this.selectedItem = index;
   }

   decreJean(quantite:number){
     if(this.elementQuantite>0){
     alert(this.elementQuantite)
      this.elementQuantite--
      this.elementQuantite == this.elementQuantite
     }    
  }
  increJean(quantite:number){
    alert(this.elementQuantite)
    this.elementQuantite ++
    this.elementQuantite == this.elementQuantite
  }
  update(){

  }

}
