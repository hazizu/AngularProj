import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'path';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class SelectorsService {

  constructor(private utils:UtilService) { }

  getGender(){
    return new Promise((resolve, rejects)=>{
      this.utils.getRequest("users/gender-list/",null).then(
        (res:any)=>{
          resolve(res)
        },(err:any)=>{
          rejects(err)
        }
      )
    })
  }

  getLocalite(){
    return new Promise((resolve, rejects)=>{
      this.utils.getRequest('users/location-list/',null).then(
        (res:any)=>{
          resolve(res)
        },(err:any)=>{
          rejects(err)
        }
      )
    })
  }
  
    getProvideList(){
      return new Promise((resolve,rejects)=>{
        this.utils.getRequest("users/speciality-list/",null).then(
          (res:any)=>{
            resolve(res)
          },(err:any)=>{
            rejects(err)
          }
         )
      })
  }
  
}




