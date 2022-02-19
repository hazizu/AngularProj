
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  alert:boolean=false;

  constructor(public fb: FormBuilder, private router: Router) { 
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
    }
  }

}
