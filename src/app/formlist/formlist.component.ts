import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formlist',
  templateUrl: './formlist.component.html',
  styleUrls: ['./formlist.component.css']
})
export class FormlistComponent implements OnInit {
  forms:any
  constructor(private http:HttpClient,private service:ApiserviceService,private router:Router){}
  ngOnInit(): void {
    this.service.getfroms().subscribe((res)=>{
      this.forms=res
      
    })
  }
  submit(id:string){
    this.router.navigate(["/singleform/",id])
    // this.service.singlefrom(data).subscribe((res)=>{
      
    // })

  }
  response(id:string){
    this.router.navigate(['/response/',id])
  }
}
