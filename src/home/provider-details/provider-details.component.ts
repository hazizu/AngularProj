import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-details',
  templateUrl: './provider-details.component.html',
  styleUrls: ['./provider-details.component.scss']
})
export class ProviderDetailsComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }
  return(){
    this.router.navigateByUrl('home/accueil')
  }

}
