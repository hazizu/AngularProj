import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {Observable } from 'rxjs';
import { reducers } from 'src/_contants/store.reducers';
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
  openProfile$?:Observable<any>
  openProfile:any
  

  constructor() { }

  ngOnInit(): void { 
  }
  }


