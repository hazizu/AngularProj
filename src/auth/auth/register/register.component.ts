import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  alert:boolean=false;
  isLinear = false;

  constructor(private fb: FormBuilder, private router: Router,) {
    this.registerForm = this.fb.group({
      'lastName':['', [Validators.required]],
      'firstName':['', [Validators.required]],
      'sexe':['', [Validators.required]],
      'email':['', [Validators.required, Validators.email]],
      'telephone':['', [Validators.required]],
      'password':['', [Validators.required,Validators.minLength(8)]],
      'confPassWord':['', [Validators.required,Validators.minLength(8)]]
    })
   }

  ngOnInit(): void {
  }
  connect(){

  }
  register(register:FormGroup){
    if(register.invalid){
      this.alert = true;
    }else{
      this.router.navigateByUrl('')
    }

  }

}
