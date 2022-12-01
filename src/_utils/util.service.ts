import { Injectable } from '@angular/core';
import axios, { AxiosRequestConfig } from 'axios';
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
      const token = this.getStorage('token')
      const axiosPostReq:AxiosRequestConfig = {
        url:environment.apiUrl + endPoint,
        method:'post',
        headers: {"Authorization":`JWT ${token}`},
        data:data
      }
      console.log('url',axiosPostReq.url)
      axios(axiosPostReq).then(
        (res)=>{
          resolve(res)
        },(err)=>{
          reject(err)
        }
      )
    })    
  }

  // this.utilService.setStorage('token',res.data.access)
  // const getUser:AxiosRequestConfig = {
  //   url:environment.apiUrl + 'user-dashboard/',
  //   method: 'GET',
  //   headers: {"Authorization":`JWT ${res.data.access}`}
  // }

axiosConfing(data:any,endPoint:string,token:string){
  const axiosGetReq:AxiosRequestConfig = {
    url:environment.apiUrl + endPoint,
    method:'get',
    headers: {"Authorization":`TOKEN ${token}`},
    data:data
  }
  return axiosGetReq
}

axiosConfingNoHeader(data:any,endPoint:string){
  const axiosGetReq:AxiosRequestConfig = {
    url:environment.apiUrl + endPoint,
    method:'get',
    data:data
  }
  return axiosGetReq
}


  getRequest(endPoint:string,data:any){
    return new Promise((resolve, reject) => {
      const token = this.getStorage('token')
       const axiosPostReq:any  = token ? this.axiosConfing(data,endPoint,token) : this.axiosConfingNoHeader(data,endPoint)
      axios(axiosPostReq).then(
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


