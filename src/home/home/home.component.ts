import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  open?:boolean

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  getProvideRegister(){
      this.router.navigateByUrl('provider-register')
  }
  drop(){
    this.open = !this.open;
  }
  getServices(){
    this.router.navigateByUrl('home/our-services')
  }
  getHome(){
    this.router.navigateByUrl('home/accueil')
  }
}
