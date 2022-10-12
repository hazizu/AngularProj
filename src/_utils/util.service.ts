import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  environment = environment


  constructor() { }

  postRequest(endPoint:string, data:any) {
    return new Promise((resolve, reject) => {
      axios.post(environment.apiUrl + endPoint + "/", data).then(
        (res)=>{
          resolve(res)
        },(err)=>{
          reject(err)
        }
      )
    })    
  }


  getRequest(endPoint:string,data:any){
    return new Promise((resolve, reject) =>{
      axios.get(environment.apiUrl + endPoint + "/", data).then(
        (res)=>{
          resolve(res)
        },(err)=>{
          reject(err)
        }
      )
    })
  }

  async convertToBase64(file: File | any){
    let file_string = await this.getBase64(file) as any
    file = null
     return new Promise((resolve, reject) => {
       resolve(file_string)
     });
   }

   async getBase64(file: File | any){
    if(file){
    let reader = new FileReader();
    let toConvert: any = '';
   reader.readAsDataURL(file);
   file = null
    return new Promise((resolve, reject) => {
      reader.onload = function () {
        toConvert = reader.result
        reader.abort()
        resolve(toConvert)
       }; 
    })
    }
  }

 
  setStorage(key:string, value: string){
    return localStorage.setItem(key,value)
  }
  getStorage(key: string){
    return localStorage.getItem(key)
  }
  deleteStorege(key:string){
    localStorage.removeItem(key)
  }

  showSnackBar(msg:string, matSnac:MatSnackBar){
    matSnac.open(msg)
    
  }


}


