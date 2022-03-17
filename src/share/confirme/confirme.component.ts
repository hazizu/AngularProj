import { Inject, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import{DialogData} from './../../home/home/home.component'

@Component({
  selector: 'app-confirme',
  templateUrl: './confirme.component.html',
  styleUrls: ['./confirme.component.scss']
})
export class ConfirmeComponent implements OnInit {
  
  constructor(public dialogRef:MatDialogRef<ConfirmeComponent>,@Inject(MAT_DIALOG_DATA) public data:DialogData) { }

  ngOnInit(): void {
  }
  yes(){
    this.dialogRef.close(true)
  }
  no(){
    this.dialogRef.close(false)
  }

}
