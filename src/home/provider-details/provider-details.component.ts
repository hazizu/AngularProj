import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { reducers } from 'src/_contants/store.reducers';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { AppStore } from 'src/_enumes/stores.enum';
import { UtilService } from 'src/_utils/util.service';
import { setProviderList } from 'src/_store/providersList/providerList.action';
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;





@Component({
  selector: 'app-provider-details',
  templateUrl: './provider-details.component.html',
  styleUrls: ['./provider-details.component.scss']
})
export class ProviderDetailsComponent implements OnInit {
  providerList$?:Observable<any>
  providerList:any
  showSelectClothesForm:boolean=false
  providerId$?:Observable<any>
  providerId?:any
  providerData:any
  arrive:boolean = false

  @ViewChild('dowloadTemp')
  dowloadTemp!: ElementRef;
  

  constructor(private router: Router,private store:Store<typeof reducers>,
    private route: ActivatedRoute,
    private utils:UtilService) { }

  ngOnInit(): void {
    console.log('router',this.router.url.split('/').pop())
    this.providerId = this.router.url.split('/').pop()

  this.providerList$ = this.store.select(AppStore.providerList).pipe(
    map(
      (state:any)=>state.providerList
    )
  )
  this.providerList$.subscribe((res)=>{
    console.log('listy',res)
    this.arrive = true
    if(res?.length){
      this.providerList = res
      res.forEach((provider:any) => {
        if(provider.id == this.providerId){
          this.providerData = provider 
        }
      });

    }
  
  })

  }

  returnHome(){
    this.router.navigateByUrl('home/accueil')
  }
  valide(){
    this.router.navigateByUrl('home/choix-vêtements-prestataire/' + this.providerId)
    // this.showSelectClothesForm = true;
  }
  back(){
    this.showSelectClothesForm = false; 
  }
  connect(){
    
  }
  // getProviderList(){
  //   this.utils.getRequest('users/prestataires-liste/',null).then(
  //     (res:any)=>{
  //       console.log('provider list', res.data)
  //       if(!this.providerList.length){
  //         this.providerData = res.data
  //       }
  //       this.store.dispatch(setProviderList({provider:res.data}))
  //     }
  //   )
  // }


}
