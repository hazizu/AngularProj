import { Position } from './../../../node_modules/@types/pdfmake/interfaces.d';
import { Component, Input, OnInit } from '@angular/core';
import { DialogPosition, MatDialog } from '@angular/material/dialog';
import { SucessAlertComponent } from '../sucess-alert/sucess-alert.component';

@Component({
  selector: 'app-resume-commande',
  templateUrl: './resume-commande.component.html',
  styleUrls: ['./resume-commande.component.scss']
})
export class ResumeCommandeComponent implements OnInit {
  @Input() resumeTitle?:String
  @Input() elementLibelle?:String
  @Input() elementQte?:number
  @Input() elementPrice?:number
  @Input() resumePrice?:number
  @Input() resumeArray?:any
  


  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
    
  }
  calculeGlobale(){
    if(this.resumeArray.length){
      const price = this.resumeArray.map((item:any )=> item.price).reduce((prev:any, curr:any) => prev + curr,0);
      return price
    }
  }

  valideCommande(){
   this.dialog.open(SucessAlertComponent,{
     width:'30rem',
     data:{
       successTitle:"Validé !",
       successMessage:"Félicitation votre panier à linge nous est parvenu. Le prestataire vous contactera dans un instant."
     }
   })
  }

}
