import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provide-register',
  templateUrl: './provide-register.component.html',
  styleUrls: ['./provide-register.component.scss']
})
export class ProvideRegisterComponent implements OnInit {
  provideForm: FormGroup;
  alert: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
      this.provideForm = this.fb.group({
        "firstName":["", Validators.required],
        "lastName":["", Validators.required],
        "telephone": ["",Validators.required],
        "email": ["", Validators.email],
        "address": ["",[Validators.required,]],
        "TypeProvide":["", Validators.required],
        "password":["",[Validators.required, Validators.minLength(6)]],
        "confirmPassWord":["",[Validators.required, Validators.minLength(6)]]
      })
   }

  ngOnInit(): void {

  }

  provideRegiste(provideRegister:FormGroup){

    if(provideRegister.invalid){
      this.alert = true
    }

  }
  returHome(){
    this.router.navigateByUrl('home/accueil')
  }

}
