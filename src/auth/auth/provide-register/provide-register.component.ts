import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SelectCheckboxComponent } from 'src/share/select-checkbox/select-checkbox.component';
import { Provider } from 'src/_models/provider';
import { UtilService } from 'src/_utils/util.service';

@Component({
  selector: 'app-provide-register',
  templateUrl: './provide-register.component.html',
  styleUrls: ['./provide-register.component.scss']
})
export class ProvideRegisterComponent implements OnInit {
  provideForm: FormGroup;
  alert: boolean = false;
  imageBase64:string = '';
  photo:boolean = true
  prestations:any
  sexe:any
  localite:any
  loading:boolean = false;
  selectedProvide:any
  showSuccess:boolean = false
  provideData:any
  isLinear = false
  
  // prestations2 = [
  //   {id:"",libelle:"fanico",},
  //   {id:"",libelle:"autre"}
  // ];

  constructor(private fb: FormBuilder, private router: Router,private util:UtilService, public dialog:MatDialog) {
      this.provideForm = this.fb.group({
        "firstName":["", Validators.required],
        "lastName":["", Validators.required],
        // "sexe":["",Validators.required],
        "telephone": ["",Validators.required],
        // "email": ["", [Validators.email,Validators.required]],
        "prestation":["",Validators.required],
        "password":["",[Validators.required, Validators.minLength(6)]],
        "commune":["",Validators.required]
        // "confirmPassWord":["",[Validators.required, Validators.minLength(6)]]
      })
   }

  ngOnInit(): void {
    
   
  }


  provideRegiste(register:FormGroup){
    if(register.valid){
      this.loading = true
      console.log(register.value)
      this.util.postRequest("users/register-prestataire/",
      new Provider(
        register.value.firstName,
        register.value.telephone.number,
        register.value.commune,
        // register.value.sexe,
        register.value.password,
        register.value.prestation,
        // this.imageBase64,
        // register.value.email
        )).then(
          (res:any)=>{
            this.showSuccess = true 
           this.provideData = res.data
            this.loading = false;
            console.log('inscription réuissi',res)
          },(err)=>{
            this.loading = false
            console.log(err)
          }
        )
    }else{
      this.alert = true 
    }
      
    
  }

  checkValue(){}
 

  getLogin(){
    this.router.navigateByUrl('')
  }
  getFile(files:any){
    let file = files.target.files[0]
    if(file){
      this.photo = false
    }
     this.util.convertToBase64(file).then(
      (res:any)=>{
        this.imageBase64 = res
        console.log(res)
      }
     )
  }
  // getListPresta(){
  //   this.dialog.open(SelectCheckboxComponent,{
  //     width:"40rem",
      
  //   })
  // }
//   getProvideList(){
//  this.util.getRequest("users/speciality-list/",null).then(
//   (res:any)=>{
//     this.prestations = res.data
//   }
//  )
//   }


  continue(){
    this.router.navigateByUrl('')
  }

}
