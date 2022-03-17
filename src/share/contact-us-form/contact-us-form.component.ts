import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss']
})
export class ContactUsFormComponent implements OnInit {

  contactUsForm: FormGroup
  showAlert:boolean = false

  constructor(private fb:FormBuilder, private router:Router) {
    this.contactUsForm = fb.group({
      "name":["",Validators.required],
      "email":["", [Validators.email, Validators.required]],
      "title":["", Validators.required],
      "description":[""]
    })
   }

  ngOnInit(): void {
  }
  sendMessage(contactData:FormGroup){
    if(contactData.invalid){
      this.showAlert = true;
    }
    console.log("contactData",contactData)
  }
  home(){
    this.router.navigateByUrl('home/accueil')
  }

}
