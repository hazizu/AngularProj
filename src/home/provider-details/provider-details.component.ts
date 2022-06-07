import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { reducers } from 'src/_contants/store.reducers';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;





@Component({
  selector: 'app-provider-details',
  templateUrl: './provider-details.component.html',
  styleUrls: ['./provider-details.component.scss']
})
export class ProviderDetailsComponent implements OnInit {
  providerList$?:Observable<any>
  providerList:any
  showSelectClothesForm:boolean=false

  @ViewChild('dowloadTemp')
  dowloadTemp!: ElementRef;

  constructor(private router: Router,private store:Store<typeof reducers>) { }

  ngOnInit(): void {

  }

  returnHome(){
    this.router.navigateByUrl('home/accueil')
  }
  valide(){
    this.router.navigateByUrl('home/choix-vêtements')
    // this.showSelectClothesForm = true;
  }
  back(){
    this.showSelectClothesForm = false; 
  }
  download(){
    // const pdfTable = this.dowloadTemp.nativeElement;
    // var html = htmlToPdfmake(pdfTable.innerHTML);
    // const documentDefinition = { content: html };
    // pdfMake.createPdf(documentDefinition).download(); 


    let data:any = document.getElementById('dowloadTemp');
    html2canvas(data).then((canvas) =>{
      let docWidth = 208;
      let docHeight = canvas.height * docWidth / canvas.width;

      const contentDataUrl = canvas.toDataURL('image/jpg')
      let doc  = new jsPDF('p','mm','a4');
      let position = 0
      doc.addImage(contentDataUrl,'JPG', 0, position, docWidth, docHeight)
      doc.save('exportedPdf.pdf');
    });

  }

}
