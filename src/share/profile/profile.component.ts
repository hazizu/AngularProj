import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map} from 'rxjs/operators';
import { reducers } from 'src/_contants/store.reducers';
import { AppStore } from 'src/_enumes/stores.enum';

import { UtilService } from 'src/_utils/util.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  previousUrl: string =""
  user$?:Observable<any>
  user:any
  @Input() profileData:boolean = true
  @Output() clearClick: EventEmitter<any> = new EventEmitter();


  constructor(private utils:UtilService,private router:Router,private store:Store<typeof reducers>) {
   }

  ngOnInit(): void {
    this.user$ = this.store.select(AppStore.userProfile).pipe(
      map(
        (state:any)=>{
          return state.userProfile
        }
      )
      )
      this.user$.subscribe((res)=>{
        this.user = res
        console.log("dispatch data user",res)
      })


  }
  clear(){
      this.router.navigateByUrl('home/accueil')
  }

  getProfileData(){

  }

}
