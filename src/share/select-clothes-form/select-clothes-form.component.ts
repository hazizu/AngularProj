import { ResumeCommandeMobileComponent } from './../resume-commande-mobile/resume-commande-mobile.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { findIndex, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { reducers } from 'src/_contants/store.reducers';
import { setCommandeData } from 'src/_store/commandeData/commandeData.action';
import { AlertComponent } from '../alert/alert.component';
import { AppStore } from 'src/_enumes/stores.enum';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-select-clothes-form',
  templateUrl: './select-clothes-form.component.html',
  styleUrls: ['./select-clothes-form.component.scss']
})
export class SelectClothesFormComponent implements OnInit {
  @Input()  showSelectClothesForm:boolean = false;
  @Output() clicked:EventEmitter<boolean> = new EventEmitter<boolean>();
  saleForm:FormGroup
  totalElementPrice?:number
  qte?:any
  q:any
  p:any
  mutValue:number=0
  mut1:number=0
  mut2:number=0
  mut3:number=0
  element:any
  openPanier:boolean = false
  openPanierResume$?:Observable<any>
  commandeData$?:Observable<any>
  commandeData:any
  
  resumeCommande:any[] = []
  
  chemise ={
    libelle:"chemise",
    quantite:0,
    prix:0
  }
  pantalon = {
    libelle:"chemise",
    quantite:0,
    prix:0
  }

  constructor(private fb: FormBuilder,private dialog:MatDialog, private store:Store<typeof reducers>) { 
   this.saleForm = this.fb.group({

   })
  }

  ngOnInit(): void {
  this.openPanierResume$ = this.store.select(AppStore.commandeData).pipe(
    map(
      (state: any)=>{
        return state.loading
      }
    )
  )
  this.openPanierResume$.subscribe((res)=>{
    this.openPanier = res
  })


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
  return(){
    this.clicked.emit()
  }
  // selected(element:any, index:number, event:any){
  //   if(event.target.checked && index>=0){
  //     element.quantite = 1
  //     console.log('quantite',element.quantite)
  //     console.log(element, index)
  //   }else{
  //     this.qte = 0
  //     console.log('quantite',element.quantite )
  //   }
      
  //   }
    
  

  calGlobalPriceChem(quantites:any) {
    let globale =  100 * this.mutValue
     return globale
  }
  calGlobalPricePant(quantites:any){
     let globale = 150 * this.mut1
     return globale
  }
  calGlobalPriceRobe(quantites:any){
    let globale = 150 * this.mut2
    return globale
  }
  calGlobalPriceJean(quantite:any){
    let globale = 200 * this.mut3
    return globale
  }
  confirmChem(libelle:string, quantite:number){
    const obj :any  = {}
    const price = this.calGlobalPriceChem(quantite)
    obj.libelle = libelle
    obj.quantite = this.mutValue
    obj.price = price
    obj.id = 0
    this.mutValue =0
      this.verifierCommande(obj, this.resumeCommande,libelle,quantite)
      
  }
  confirmRobe(libelle: string, quantite:number){
    const obj :any  = {}
    const price = this.calGlobalPriceRobe(quantite)
    obj.libelle = libelle
    obj.quantite = this.mut2
    obj.price = price
    obj.id = 1
    this.mut2 = 0

      this.verifierCommande(obj,this.resumeCommande,libelle,quantite)
  }

  confirmPant(libelle: string, quantite:number){
    const obj :any  = {}
    const price = this.calGlobalPricePant(quantite)
    obj.libelle = libelle
    obj.quantite = this.mut1
    obj.price = price
    obj.id = 2
    this.mut1=0
      this.verifierCommande(obj,this.resumeCommande,libelle,quantite)
  }
  confirmJean(libelle: string, quantite:number){
    const obj :any  = {}
    const price = this.calGlobalPriceJean(quantite)
    obj.libelle = libelle
    obj.quantite = this.mut3
    obj.price = price
    obj.id =3
    this.mut3=0
      this.verifierCommande(obj,this.resumeCommande,libelle,quantite)
    
  }
  decreChem() {
    if(this.mutValue>0){
      this.mutValue--
      this.mutValue = this.mutValue
    }
  }
  increChem() {
      this.mutValue++
      this.mutValue = this.mutValue
  }
  decrePant() {
    if(this.mut1>0){
      this.mut1--
      this.mut1 = this.mut1
    }

  }
  increPant() {
      this.mut1++
      this.mut1 = this.mut1
  }
  decreRobe() {
    if(this.mut2>0){
      this.mut2--
      this.mut2 = this.mut2
    }

  }
  increRobe() {
      this.mut2++
      this.mut2 = this.mut2
  }
  decreJean(){
    if(this.mut3>0){
      this.mut3--
      this.mut3 = this.mut3
    }
  }
  increJean(){
    this.mut3++
    this.mut3 = this.mut3
  }
  findElement(array: any,libelle: string){
   return array.some((el:any)=>{
     this.element = el
       return el.libelle === libelle
   })

  }
  

   verifierCommande(obj:any, list:any, libelle:string,quantite:number) {
     if(quantite == 0){
       this.alertNoQuantite(libelle)
     }else{
      let i:any;
      if(!list.length){
        list.push(obj)
        console.log(list)
        this.store.dispatch(setCommandeData({commandeData:[...list]}))
      }
    if(list.length){
      i = this.findElement(list,libelle)
      if(!i){
        list.push(obj)
        console.log(list)
        this.store.dispatch(setCommandeData({commandeData:[...list]}))
      } 
      if(i){
        list.splice(list.indexOf(this.element),1)
        list.push(obj)
        console.log('el trouvé',this.element)
        console.log(list)
        this.store.dispatch(setCommandeData({commandeData:[...list]}))
        
      }
    }
  }
}
getResumeMobile(){
  this.dialog.open(ResumeCommandeMobileComponent,{
    width:"30rem",
    data:this.resumeCommande
  })
  this.store.dispatch(setCommandeData({commandeData:[...this.resumeCommande]}))
}

alertNoQuantite(libelle:string) {
  this.dialog.open(AlertComponent,{
    width:"20rem",
    data:{
      message:"Sélectionnez le nombre de " + libelle + " à laver avant de continuer"
    }
  })
}


}


