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
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-select-clothes-form',
  templateUrl: './select-clothes-form.component.html',
  styleUrls: ['./select-clothes-form.component.scss']
})
export class SelectClothesFormComponent implements OnInit {
  @Input()  showSelectClothesForm:boolean = false;
  @Output() clicked:EventEmitter<boolean> = new EventEmitter<boolean>();
 
  totalElementPrice?:number
  qte?:any
  q:any
  p:any
  unitChemise:number=0
  unitPantalon:number=0
  unitRobe:number=0
  unitJean:number=0
  element:any
  openPanier:boolean = false
  commandeData:any
  
  resumeCommande:any[] = []
  
 

  constructor(private fb: FormBuilder,
    private dialog:MatDialog, 
    private store:Store<typeof reducers>,
    private dbService: NgxIndexedDBService) { 
   
  }

  ngOnInit(): void {

   
  }
  return(){
    this.clicked.emit()
  }
 
    
  calGlobalPriceChem() {
    let globale =  100 * this.unitChemise
     return globale
  }
  calGlobalPricePant(){
     let globale = 150 * this.unitPantalon
     return globale
  }
  calGlobalPriceRobe(){
    let globale = 150 * this.unitRobe
    return globale
  }
  calGlobalPriceJean(){
    let globale = 200 * this.unitJean
    return globale
  }
  confirmChem(libelle:string, quantite:number){
    const obj :any  = {}
    const price = this.calGlobalPriceChem()
    obj.libelle = libelle
    obj.quantite = this.unitChemise
    obj.price = price
    obj.id = 0
    this.unitChemise =0
      this.verifierCommande(obj, this.resumeCommande,libelle,quantite)
      
  }
  confirmRobe(libelle: string, quantite:number){
    const obj :any  = {}
    const price = this.calGlobalPriceRobe()
    obj.libelle = libelle
    obj.quantite = this.unitRobe
    obj.price = price
    obj.id = 1
    this.unitRobe = 0

      this.verifierCommande(obj,this.resumeCommande,libelle,quantite)
  }

  confirmPant(libelle: string, quantite:number){
    const obj :any  = {}
    const price = this.calGlobalPricePant()
    obj.libelle = libelle
    obj.quantite = this.unitPantalon
    obj.price = price
    obj.id = 2
    this.unitPantalon=0
      this.verifierCommande(obj,this.resumeCommande,libelle,quantite)
  }
  confirmJean(libelle: string, quantite:number){
    const obj :any  = {}
    const price = this.calGlobalPriceJean()
    obj.libelle = libelle
    obj.quantite = this.unitJean
    obj.price = price
    obj.id =3
    this.unitJean=0
      this.verifierCommande(obj,this.resumeCommande,libelle,quantite)
    
  }
  decreChem() {
    if(this.unitChemise>0){
      this.unitChemise--
      this.unitChemise = this.unitChemise
    }
  }
  increChem() {
      this.unitChemise++
      this.unitChemise = this.unitChemise
  }
  decrePant() {
    if(this.unitPantalon>0){
      this.unitPantalon--
      this.unitPantalon = this.unitPantalon
    }

  }
  increPant() {
      this.unitPantalon++
      this.unitPantalon = this.unitPantalon
  }
  decreRobe() {
    if(this.unitRobe>0){
      this.unitRobe--
      this.unitRobe = this.unitRobe
    }

  }
  increRobe() {
      this.unitRobe++
      this.unitRobe = this.unitRobe
  }
  decreJean(){
    if(this.unitJean>0){
      this.unitJean--
      this.unitJean = this.unitJean
    }
  }
  increJean(){
    this.unitJean++
    this.unitJean = this.unitJean
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


