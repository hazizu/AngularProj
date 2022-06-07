import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { reducers } from 'src/_contants/store.reducers';
import { AppStore } from 'src/_enumes/stores.enum';
import { ConfirmeComponent } from 'src/share/confirme/confirme.component';
import { ResumeCommandeMobileComponent } from 'src/share/resume-commande-mobile/resume-commande-mobile.component';
import { setCommandeData } from 'src/_store/commandeData/commandeData.action';

export interface DialogData{
  dialogMessage:string;
  titleMessage:string
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  open?:boolean
  list$?:Observable<any>
  list:any
  hideMobileIcon:boolean = true
  IconShow:boolean=true;
  IconClear:boolean=false;
  commandeData$?:Observable<any>
  commandeData:any



  constructor(
    private router: Router,
    private store: Store<typeof reducers>,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.list$ = this.store.select(AppStore.providerList).pipe(
      map(
        (state:any)=>{
          return state.providerList
        }
      )
    )
    this.list$.subscribe((res)=>{
      this.list = res
      console.log("providers providers",this.list)
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

  getProvideRegister(){
      this.router.navigateByUrl('provider-register')
  }
  drop(){
    this.open = !this.open;
    this.IconShow = false;
    this.IconClear = true
  }
  dropClear(){
    this.open = !this.open;
    this.IconClear = false;
    this.IconShow = true;
  }
  getServices(){
    this.open = !this.open;
    this.IconClear = false;
    this.IconShow = true;
    this.router.navigateByUrl('home/our-services')
    
  }
  getHome(){
    this.router.navigateByUrl('home/accueil')
    this.open = !this.open;
    this.IconClear = false;
    this.IconShow = true;
  }
  getContactForm(){
    this.router.navigateByUrl('contactez-nous')
    this.open = !this.open;
    this.IconClear = false;
    this.IconShow = true;
  }
  deconnexion(){
    const dialogref = this.dialog.open(ConfirmeComponent,{
      width:"35rem",
      data:{
        titleMessage:"Déconnection",
        dialogMessage:"Voulez-vous vraiment vous déconnecter?"
      }
    });
   dialogref.afterClosed().subscribe(result => {
     if(result){
       console.log('oui',result);
       this.router.navigateByUrl("");
     }else{
      this.open = !this.open;
      this.IconClear = false;
      this.IconShow = true;

     }
   })
  }
  getResumeMobile(){
    this.dialog.open(ResumeCommandeMobileComponent,{
      width:"100vw",
      data:this.commandeData,
      position:{
        bottom:'0px' 
      }
    })
    this.store.dispatch(setCommandeData({commandeData:[...this.commandeData]}))
  }
}
