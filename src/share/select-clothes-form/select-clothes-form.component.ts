import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-clothes-form',
  templateUrl: './select-clothes-form.component.html',
  styleUrls: ['./select-clothes-form.component.scss']
})
export class SelectClothesFormComponent implements OnInit {
  @Input()  showSelectClothesForm:boolean = false;
  @Output() clicked:EventEmitter<boolean> = new EventEmitter<boolean>();
  formPage = [
    {
      libelle:"chemise",
      selected:false,
      quantite:0,
      prixUnitaire:50,
      prixGlobale:0
    },
    {
      libelle:"Pantalon jean",
      selected:false,
      quantite:0,
      prixUnitaire:200,
      prixGlobale:0
    },
    {
      libelle:"tee-Shirt",
      selected:false,
      quantite:0,
      prixUnitaire:100,
      prixGlobale:0
    },
    {
      libelle:"Pantalon tissu",
      selected:false,
      quantite:0,
      prixUnitaire:150,
      prixGlobale:0,
    },
    {
      libelle:"robe",
      selected:false,
      quantite:0,
      prixUnitaire:200,
      prixGlobale:0,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }
  return(){
    this.clicked.emit()
  }

}
