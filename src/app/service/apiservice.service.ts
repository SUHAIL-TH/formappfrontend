import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../environments/environments'
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }
  backendapi=environment.api

   addnewform(data:any){
    return this.http.post(`${this.backendapi}/addform`,data)
  }
  getfroms(){
    return this.http.get(`${this.backendapi}/getforms`)
  }
  singlefrom(id:string){
  
    return this.http.get(`${this.backendapi}/singleform?id=${id}`)
  }
  addresponse(data:any){
    return this.http.post(`${this.backendapi}/addresponse`,data)
  }
  getresponses(id:string){
    return this.http.get(`${this.backendapi}/formresponses?id=${id}`)
  }
}
