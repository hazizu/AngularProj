import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { interval, pipe } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { reducers } from 'src/_contants/store.reducers';
import { AppStore } from 'src/_enumes/stores.enum';
import { setCommandeData } from 'src/_store/commandeData/commandeData.action';
import { ConfirmeComponent } from '../confirme/confirme.component';
import { SucessAlertComponent } from '../sucess-alert/sucess-alert.component';
import { WaitingLoadingComponent } from '../waiting-loading/waiting-loading.component';

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
  @Input() open:boolean=false
  commandeData$?:Observable<any>
  openResume$?:Observable<any>
  openResume:any
  commandeData:any
  showUpdateContainer:boolean = false
  selectedItem:any
  elementQuantite:any
  elementLib:any
  toUpdateElement:any
  toUpdateElementIndex?:number
  interval$?:Observable<any>
  close?:boolean
  load:boolean = false


  open2:boolean = false
  imageUrl:string = ''



  constructor(private dialog:MatDialog, public dialModalRef:MatDialogRef<any>,
    public dialogRef: MatDialogRef<ResumeCommandeMobileComponent>, @Inject(MAT_DIALOG_DATA) public data: any, 
    private store: Store<typeof reducers>) { }

  ngOnInit(): void {

    this.commandeData$ = this.store.select(AppStore.commandeData).pipe(
      map(
        (state:any)=>{
          return state?.commandeData;
        }
      )
    )
    this.commandeData$.subscribe((res)=>{
      console.log('resume',res)
      this.commandeData = res
    })

    // this.interval$ = interval(1000).pipe(
    //   map((value) =>{
    //    return value*10
    //   })
      
    // );
    // this.interval$?.subscribe((value:number)=>{
    //   console.log(value);
    // })

 
    this.openResume$ = this.store.select(AppStore.commandeData).pipe(
      map(
        (state:any)=>{
          return state.loading
        }
      )
    )
    this.openResume$.subscribe((res)=>{
      console.log('open state',res)
      this.open = res
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
  

  calculeGlobale(){
    if(this.commandeData .length){
      const price = this.commandeData .map((item:any )=> item.price).reduce((prev:any, curr:any) => prev + curr,0);
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

   updateElement(element:any, index:number){
    
    this.toUpdateElement = element
    this.getImage(element.libelle)
    this.elementQuantite = element.quantite
    this.elementLib = element.libelle
    this. toUpdateElementIndex = index
    this.open2 = true
    
   }
   fermer(){
    //  this.dialog.open(WaitingLoadingComponent,{
      
    //   width:'20rem',
    //   height:'20rem',
    //   data:this.close
    //  })
      this.open2 = false

   }

   decreJean(quantite:number){
     if(this.elementQuantite>0){
      this.elementQuantite--
      
     }    
  }
  increJean(quantite:number){
    this.elementQuantite ++
    console.log(this.elementQuantite)
  }
  update() {
  // const copiearray:any[] = []
  // this.commandeData.forEach((commande:any) =>{
  //   if(commande.libelle != this.elementLib){
  //     copiearray.push(commande)
  //   }else{
  //     let newel:any = {}
  //     newel.libelle = this.elementLib
  //     newel.quantite = this.elementQuantite
  //     newel.prix =  
  //   }
   
  }
  
 

  getImage(libelle: string){
    switch(libelle){
      case "pantalon":
        this.imageUrl =  './../../assets/commandeImg/un-pantalon.png';
        break;
      case 'robe':
        this.imageUrl = './../../assets/commandeImg/robe.png';
        break;
        
      case "jean":
        this.imageUrl = './../../assets/commandeImg/jeans.png';
        break;
      case "chemise":
        this.imageUrl = './../../assets/commandeImg/chemise-a-manches-courtes.png';
        break;
    }
  }
  payer(){

  }
  closeResume(){
    this.dialogRef.close()
  }

  deleteElement(element:any, index:number){
    const dialogrefe =  this.dialog.open(ConfirmeComponent,{
      data:{
        titleMessage:'',
        dialogMessage:"Voulez-vous retirer les " +element.libelle+"s de votre panier à linge?"

      }
    });
    dialogrefe.afterClosed().subscribe(result =>{
      if(result){
        console.log('ok')
        console.log(element)
        let commandeDataCopie = [...this.commandeData]
        
        console.log('commandes',commandeDataCopie)
        commandeDataCopie.splice(index,1)
        console.log('commandes',commandeDataCopie)
        this.store.dispatch(setCommandeData({commandeData:commandeDataCopie}))
      }else{
        console.log('no')
      }
    })
   
  }

}
