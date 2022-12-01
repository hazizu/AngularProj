import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Provider } from 'src/_models/provider';
import { Register } from 'src/_models/register';
import { UtilService } from 'src/_utils/util.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  provideForm:FormGroup
  alert:boolean=false;
  load:boolean=false;

 
  registerData:any
  currentForm:string = 'clientForm'
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

  constructor(private fb: FormBuilder, private router: Router,private utils:UtilService) {
    this.registerForm = this.fb.group({
      // 'lastName':['', [Validators.required]],
      // 'firstName':['', [Validators.required]],
      'username':['', [Validators.required]],
      // 'email':['', [Validators.required, Validators.email]],
       'telephone':['', [Validators.required]],
      'password':['', [Validators.required,Validators.minLength(8)]],
      // 'confPassWord':['', [Validators.required,Validators.minLength(8)]]
    })

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
    this.getLocalite()
    this.getPrestation()
  }
  getForm(currentForm:string){
     this.currentForm = currentForm
  }
  connect(){

  }
  register(register:FormGroup){
    if(register.valid){
      this.load = true;
      const registerVal= register.value
      
      const data = new Register(registerVal.username, registerVal.telephone.number, registerVal.password)

      this.utils.postRequest("users/register-utilisateur/",data).then(
        (res)=>{
          this.load = false;
          console.log(res)
          this.router.navigateByUrl('/')
        },
        (err:any)=>{
          this.load = false
          console.log("error",err)
        }
      )
    }
    else{
        this.alert = true;
        console.log(register.value)
      }
    }


  provideRegiste(register:FormGroup){
   
    if(register.valid){
      this.loading = true
      console.log(register.value)
      this.utils.postRequest("users/register-prestataire/",
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

  
  goToConnect(){
    this.router.navigateByUrl('')
  }


  getLocalite(){
      this.utils.getRequest('users/location-list/','').then(
        (res:any)=>{
          this.localite = res.data
          console.log(this.localite)
        },(err:any)=>{
        
        }
      )
  }
  
    getPrestation(){
        this.utils.getRequest("users/speciality-list/",'').then(
          (res:any)=>{
            this.prestations = res.data
            console.log(this.prestations)
          },(err:any)=>{
          }
         )
  }
  continue(){
    this.router.navigateByUrl('')
  }
  
}
