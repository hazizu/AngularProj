import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { reducers } from 'src/_contants/store.reducers';
import { AppStore } from 'src/_enumes/stores.enum';
import { ConfirmeComponent } from 'src/share/confirme/confirme.component';
import { setCommandeData, setProfilState, } from 'src/_store/commandeData/commandeData.action';
import { ResumeCommandeMobileComponent } from 'src/share/resume-commande-mobile/resume-commande-mobile.component';

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
  openProfile:boolean = false;
  list$?:Observable<any>
  list:any
  hideMobileIcon:boolean = true
  IconShow:boolean=true;
  IconClear:boolean=false;
  commandeData$?:Observable<any>
  commandeData:any
  openResume:boolean=false

  constructor(
    private router: Router,
    private store: Store<typeof reducers>,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
 
    this.commandeData$ = this.store.select(AppStore.commandeData).pipe(
      map(
        (state:any)=>{
          return state?.commandeData;
        }
      )
    )
    this.commandeData$.subscribe((res:any)=>{
      this.commandeData = res
      console.log("commandeData select",this.commandeData)
    })
   

  }

  getProvideRegister(){
      this.router.navigateByUrl('provider-register')
  }
  drop(){
    this.clear();
  }
  dropClear(){
    this.clear();
  }
  getServices(){
   this.clear();
    this.router.navigateByUrl('home/our-services')
    
  }
  getHome(){
    this.router.navigateByUrl('home/accueil')
   this.clear()
  }
  getProfile(){
     this.router.navigateByUrl('profile')
    this.clear()
    this.openProfile = true
    this.store.dispatch(setProfilState({openProfile:this.openProfile}))
  }
  // clearProfile(){
  //   this.router.navigateByUrl('home/accueil')
  //   // this.openProfile = false
  //   // this.store.dispatch(setProfilState({openProfile:this.openProfile}))
  // }
  getContactForm(){
    this.router.navigateByUrl('contactez-nous')
    this.clear()
  }
  deconnexion(){
    
  this.clear()
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
    

     }
   })
  }
  getResumeMobile(){
    

    this.dialog.open(ResumeCommandeMobileComponent,{
      panelClass: "matdialogStyle",
      minWidth: '100%',
      height:'100vh',
      // data:this.commandeData,
      position:{
        bottom:'0px' 
      }
    })
    this.store.dispatch(setCommandeData({commandeData:[...this.commandeData]}))
  }

  clear(){
    this.open = !this.open;
    this.IconClear = false;
    this.IconShow = true;
  }
}
