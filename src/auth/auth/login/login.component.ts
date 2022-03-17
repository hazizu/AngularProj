
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { reducers } from 'src/_contants/store.reducers';
import { setProviderList } from 'src/_store/providersList/providerList.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  alert:boolean=false;

    
  providerList:any[] = [
    {
      imageUrl:"./../../assets/portrait-d-une-femme-africaine-pour-laver-le-linge-a-la-main-dans-des-seaux-accra-ghana-c5hg23.jpg",
      name:"AKISSI"
    },
    {
      imageUrl:"./../../assets/portrait-d-une-femme-africaine-pour-laver-le-linge-a-la-main-dans-des-seaux-accra-ghana-c5hg23.jpg",
      name:"KONAN Beatrice"
    },
    {
      imageUrl:"./../../assets/portrait-d-une-femme-africaine-pour-laver-le-linge-a-la-main-dans-des-seaux-accra-ghana-c5hg23.jpg",
      name:"MALIMOUNA Bobo"
    },
    {
      imageUrl:"./../../assets/portrait-d-une-femme-africaine-pour-laver-le-linge-a-la-main-dans-des-seaux-accra-ghana-c5hg23.jpg",
      name:"KOUADIO FELI"
    },
    {
      imageUrl:"./../../assets/portrait-d-une-femme-africaine-pour-laver-le-linge-a-la-main-dans-des-seaux-accra-ghana-c5hg23.jpg",
      name:"KAKA Kaka"
    },
    {
      imageUrl:"./../../assets/portrait-d-une-femme-africaine-pour-laver-le-linge-a-la-main-dans-des-seaux-accra-ghana-c5hg23.jpg",
      name:"KONE NATACHA"
    },
    {
      imageUrl:"./../../assets/portrait-d-une-femme-africaine-pour-laver-le-linge-a-la-main-dans-des-seaux-accra-ghana-c5hg23.jpg",
      name:"BABE ALICE "
    },
  ]

  constructor(public fb: FormBuilder, private router: Router, private store:Store<typeof reducers>) { 
    this.loginForm = this.fb.group({
      'email':['', [Validators.required, Validators.email]],
      'password':['', [Validators.required, Validators.minLength(8)]]
    })
  }

  ngOnInit(): void {
    
  }
  connect(){
  }
  login(login:FormGroup){
    if(login.invalid){
      this.alert=true;
    }else{
      this.router.navigateByUrl('home/accueil');
      this.store.dispatch(setProviderList({provider:this.providerList}))
    }
  }

}
