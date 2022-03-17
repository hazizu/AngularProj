import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { reducers } from 'src/_contants/store.reducers';
import { AppStore } from 'src/_enumes/stores.enum';
import { ConfirmeComponent } from 'src/share/confirme/confirme.component';

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
      console.log(this.list)
    })
   
  }

  getProvideRegister(){
      this.router.navigateByUrl('provider-register')
  }
  drop(){
    this.open = !this.open;
  }
  getServices(){
    this.router.navigateByUrl('home/our-services')
    this.open = !this.open;
  }
  getHome(){
    this.router.navigateByUrl('home/accueil')
    this.open = !this.open;
  }
  getContactForm(){
    this.router.navigateByUrl('contactez-nous')
    this.open = !this.open;
  }
  deconnexion(){
    const dialogref = this.dialog.open(ConfirmeComponent,{
      width:"35rem",
      data:{
        titleMessage:"Déconnection",
        dialogMessage:"Voulez-vous vraiment vous déconnecter?"
      }
    })
   dialogref.afterClosed().subscribe(result => {
     if(result){
       console.log('oui',result)
       this.router.navigateByUrl("")
     }else{
       alert('non')
     }
   })
  }
}
