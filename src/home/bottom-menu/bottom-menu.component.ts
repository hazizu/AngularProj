import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Menu } from 'src/_models/menu';

@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.scss']
})
export class BottomMenuComponent implements OnInit {
  @Output() menu:any = new EventEmitter();
  isActive:boolean = false
  selectIndex:any

  menus = [
    new Menu("home","Accueil","accueil"),
    new Menu("engineering_outline","Prestaire?","prestataire"), 
    new Menu("help","Aide","aide"),
    new Menu("person_outline","Compte","compte"),
    new Menu('logout',"deconnecter","deconnecter"),
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getMenu(i:number){
    this.selectIndex = i
   this.menu.emit(this.menus[i].menuChoisi)
  }

}
