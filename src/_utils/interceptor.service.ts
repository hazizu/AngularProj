import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  constructor(private util:UtilService) { }

  intercept(request: HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
    const token = this.util.getStorage('token');
    if(token){
      if(!request.url.includes(environment.apiUrl)){
        request = request.clone({
          setHeaders:{

            Authorization:`JWT ${this.util.getStorage('token')}`
          }
        });
      }
    }else{
      request = request.clone({
        setHeaders:{
          'Content-Type': 'application/json'
        }
      })
    }
    return next.handle(request);
  }
  
}
