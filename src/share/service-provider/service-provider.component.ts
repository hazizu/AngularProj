import { Page } from './../../../node_modules/ngx-pagination/dist/pagination-controls.directive.d';
import { INFERRED_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { reducers } from 'src/_contants/store.reducers';
import { Observable } from 'rxjs';
import { AppStore } from 'src/_enumes/stores.enum';
import { map } from 'rxjs/operators';
import { UtilService } from 'src/_utils/util.service';
import { setProviderId, setProviderList } from 'src/_store/providersList/providerList.action';


@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.scss']
})
export class ServiceProviderComponent implements OnInit {
  @Input() providerName?:string
  @Input() imgUrl?:string
  
  searchValue:string=""
  providerListLenght?:number
  page:number = 1
  profileState$?:Observable<any>
  profileState:any
  imgaUrl:string=''
  providerList:any[] = [ ];




  constructor(private router:Router, 
    private store:Store<typeof reducers>,
    private utils:UtilService) { }

  
 

  

  ngOnInit(): void {
    this.getProviderList()
    console.log("le tableau..", this.providerList)
    this.providerListLenght  = this.providerList.length
  }

  getProvider(providerId:number, index:number){
  
      this.router.navigateByUrl('home/provider-details/' + providerId)
      this.store.dispatch(setProviderId({providerId:providerId}))
  }

  getProviderList(){
    this.utils.getRequest('users/prestataires-liste/',null).then(
      (res:any)=>{
        console.log('provider list', res.data)
        this.providerList = res.data
        // res.data.forEach((data:any)=>{
        //   this.imgaUrl = data?.profile_image_url? data?.profile_image_url : "assets/svg/woman.png"


        // })
        
      }
    )
  }

}
