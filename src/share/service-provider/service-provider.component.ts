import { Page } from './../../../node_modules/ngx-pagination/dist/pagination-controls.directive.d';
import { INFERRED_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.scss']
})
export class ServiceProviderComponent implements OnInit {
  @Input() providerName?:string
  @Input() imgUrl?:string
  
  searchValue:string=""
  providerListLenght?:number
  page:number = 1



  constructor(private router:Router) { }

  
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
      name:"BABE ALICE"
    },
    {
      imageUrl:"./../../assets/portrait-d-une-femme-africaine-pour-laver-le-linge-a-la-main-dans-des-seaux-accra-ghana-c5hg23.jpg",
      name:"MAMA FRESH "
    },
    {
      imageUrl:"./../../assets/portrait-d-une-femme-africaine-pour-laver-le-linge-a-la-main-dans-des-seaux-accra-ghana-c5hg23.jpg",
      name:"TANTIE LOLO "
    },
    {
      imageUrl:"./../../assets/portrait-d-une-femme-africaine-pour-laver-le-linge-a-la-main-dans-des-seaux-accra-ghana-c5hg23.jpg",
      name:"CASH MAMA "
    },

    // {
    //   imageUrl:"./../../assets/portrait-d-une-femme-africaine-pour-laver-le-linge-a-la-main-dans-des-seaux-accra-ghana-c5hg23.jpg",
    //   name:"AKISSI Fatima"
    // },
    // {
    //   imageUrl:"./../../assets/portrait-d-une-femme-africaine-pour-laver-le-linge-a-la-main-dans-des-seaux-accra-ghana-c5hg23.jpg",
    //   name:"AKISSI Fatima"
    // },
    // {
    //   imageUrl:"./../../assets/portrait-d-une-femme-africaine-pour-laver-le-linge-a-la-main-dans-des-seaux-accra-ghana-c5hg23.jpg",
    //   name:"AKISSI Fatima"
    // },
    // {
    //   imageUrl:"./../../assets/portrait-d-une-femme-africaine-pour-laver-le-linge-a-la-main-dans-des-seaux-accra-ghana-c5hg23.jpg",
    //   name:"AKISSI Fatima"
    // }
  ];

  

  ngOnInit(): void {
    console.log("le tableau..", this.providerList)
    this.providerListLenght  = this.providerList.length
  }

  getProvider(providerName:string, index:number){
      console.log(providerName, index);
      this.router.navigateByUrl('home/provider-details/' + providerName)
      let nouvelle = this.providerList.splice(index,1)
      console.log("element suprimer", nouvelle)
      console.log('la noubelle liste', this.providerList) 
     

  }

}
