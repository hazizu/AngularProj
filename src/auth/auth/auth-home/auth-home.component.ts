import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-home',
  templateUrl: './auth-home.component.html',
  styleUrls: ['./auth-home.component.scss']
})
export class AuthHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  getClientForm(){
 this.router.navigateByUrl('register')
  }
  getPrestataireForm(){
    this.router.navigateByUrl('provider-register')
  }
  getLogin(){
    this.router.navigateByUrl('')
  }
}
