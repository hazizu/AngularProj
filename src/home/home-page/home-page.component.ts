import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {Observable } from 'rxjs';
import { reducers } from 'src/_contants/store.reducers';
import { AppStore } from 'src/_enumes/stores.enum';
import{map} from 'rxjs/operators';
import { setProviderList } from 'src/_store/providersList/providerList.action';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  providerList$?:Observable<any>
  providerLists:any;
  commandeData$?:Observable<any>
  commandeData:any
  

  constructor(private store:Store<typeof reducers>) { }

  ngOnInit(): void {
    this.providerList$ = this.store.select(AppStore.providerList).pipe(
      map(
        (state:any) => state.providerList
      )
    )
    this.providerList$.subscribe((results:any) => {
      this.providerLists = results;
      console.log("list of providers", results);
    })
  }
  }


