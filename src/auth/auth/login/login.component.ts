
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import axios, { AxiosRequestConfig } from 'axios';
import { reducers } from 'src/_contants/store.reducers';
import { Login } from 'src/_models/register';
import { setUserProfile } from 'src/_store/searchUser/searchUser.action';
import { UtilService } from 'src/_utils/util.service';
import {environment} from './../../../environments/environment'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  alert:boolean=false;
  load:boolean = false;
  alertLoginError:boolean = false;
  badRequestMsg:boolean = false;
 

  constructor(public fb: FormBuilder,
    private router: Router, 
    private store:Store<typeof reducers>,
    private utilService:UtilService ,
    
    ) { 
    this.loginForm = this.fb.group({
      'username':['', [Validators.required]],
      'password':['', [Validators.required, Validators.minLength(8)]]
    })
  }

  ngOnInit(): void {
   
    
  }
  connect(){
  }
 
  login(login:FormGroup){
// this.utilService.snackbar('connection réussi','center','top')
    // this.router.navigateByUrl('home/accueil')
    if(login.valid){
      this.load = true
      const loginVal = login.value
      const data = new Login(loginVal.username, loginVal.password)
      console.log('data',data)
      this.utilService.postRequest("users/login-username-password/",data).then(
        (res:any)=>{
          console.log(res.data.token)
          this.utilService.setStorage('token',res.data.token)
          this.utilService.getRequest('users/user-dashboard/',null).then(
            (res:any)=>{
              console.log('information user', res)
              this.load = false
              this.store.dispatch(setUserProfile({userProfile:res.data})) 
              this.router.navigateByUrl('home/accueil')
            },(err:any)=>{
              this.load = false
              console.log('error get info user', err)
            }
          )




          // const getUser:AxiosRequestConfig = {
          //   url:environment.apiUrl + 'user-dashboard/',
          //   method: 'GET',
          //   headers: {"Authorization":`JWT ${res.data.access}`}
          // }
            // axios(getUser).then((res)=>{
            //   this.load = false
            //   console.log("user data",res)
            //   this.store.dispatch(setUserProfile({userProfile:res.data})) 
            //   this.router.navigateByUrl('home/accueil')
            // },(err)=>{ 
            //   this.load = false
            // })






          
        },(err)=>{
          this.load = false
          if(err.response.status==400){
            this.badRequestMsg=true
          }else if(err.code ="ERR_NETWORK"){
            this.alertLoginError = true
          }
          console.log("erreur login",err)
        }
      )
    }else{
      this.alert = true
    }
  }
  goToRegister(){
    this.router.navigateByUrl('register')
  }
}
