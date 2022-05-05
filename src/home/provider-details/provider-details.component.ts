import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { reducers } from 'src/_contants/store.reducers';
import { AppStore } from 'src/_enumes/stores.enum';

@Component({
  selector: 'app-provider-details',
  templateUrl: './provider-details.component.html',
  styleUrls: ['./provider-details.component.scss']
})
export class ProviderDetailsComponent implements OnInit {
  providerList$?:Observable<any>
  providerList:any
  showSelectClothesForm:boolean=false

  constructor(private router: Router,private store:Store<typeof reducers>) { }

  ngOnInit(): void {

  }

  returnHome(){
    this.router.navigateByUrl('home/accueil')
  }
  valide(){
    this.showSelectClothesForm = true;
  }
  back(){
    this.showSelectClothesForm = false;
  }

}
