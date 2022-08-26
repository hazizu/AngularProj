import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from 'src/_models/register';
import { UtilService } from 'src/_utils/util.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  alert:boolean=false;
  load:boolean=false;

  isLinear = false;
  registerData:any

  constructor(private fb: FormBuilder, private router: Router,private utilService:UtilService) {
    this.registerForm = this.fb.group({
      // 'lastName':['', [Validators.required]],
      // 'firstName':['', [Validators.required]],
      'username':['', [Validators.required]],
      'email':['', [Validators.required, Validators.email]],
      // 'telephone':['', [Validators.required]],
      'password':['', [Validators.required,Validators.minLength(8)]],
      'confPassWord':['', [Validators.required,Validators.minLength(8)]]
    })
   }

  ngOnInit(): void {
  }
  connect(){

  }
  register(register:FormGroup){
    alert('yes')
    if(register.valid){
      this.load = true;
      const registerVal= register.value
      
      const data = new Register(registerVal.username,registerVal.email,registerVal.password,registerVal.confPassWord)
   
      // this.utilService.postRequest("register",data).then(
      //   (res)=>{
      //     this.load = false;
      //     console.log(res)
      //     this.router.navigateByUrl('/')
      //   },
      //   (err:any)=>{
      //     this.load = false
      //     console.log("error",err)
      //   }
      // )
    }
    else{
        this.alert = true;
        console.log(register.value)
      }
    }

  
  goToConnect(){
    this.router.navigateByUrl('')
  }
  
}
