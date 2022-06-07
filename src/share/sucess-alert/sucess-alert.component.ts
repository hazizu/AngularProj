import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-sucess-alert',
  templateUrl: './sucess-alert.component.html',
  styleUrls: ['./sucess-alert.component.scss']
})
export class SucessAlertComponent implements OnInit {
  options: AnimationOptions = {
  path:'./../../assets/lotties/sucess.json'
  }

  constructor( public dialogRef: MatDialogRef<SucessAlertComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close();
  }


}
