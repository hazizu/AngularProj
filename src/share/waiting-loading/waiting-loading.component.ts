import { Component, Inject, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import{take} from 'rxjs/operators';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResumeCommandeMobileComponent } from '../resume-commande-mobile/resume-commande-mobile.component';
@Component({
  selector: 'app-waiting-loading',
  templateUrl: './waiting-loading.component.html',
  styleUrls: ['./waiting-loading.component.scss']
})
export class WaitingLoadingComponent implements OnInit {

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 0;
  count$?:Observable<number>


  constructor(public dialModalRef:MatDialogRef<any>,
    public dialogRef: MatDialogRef<WaitingLoadingComponent>, @Inject(MAT_DIALOG_DATA) public data: any, ) { }

  ngOnInit(): void {
    this.count$ = interval(1000/150).pipe(
      take(101),
    )
    this.count$.subscribe(count => {
      this.value = count
      // this.data = this.value == 100? true : false
      if(this.value === 100) {
        setTimeout(() => {
          this.dialogRef.close()
        },1000/3) 
        
      }
    })
  }


}
