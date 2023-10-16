import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formresponse',
  templateUrl: './formresponse.component.html',
  styleUrls: ['./formresponse.component.css'],
})
export class FormresponseComponent implements OnInit {
  formid:any
  responsedata:any
  data:any
  ngOnInit(): void {
    this.formid = this.route.snapshot.paramMap.get('id');
    this.service.getresponses(this.formid).subscribe((res)=>{
      console.log(res)
      this.responsedata=res
    
    })
  }
  constructor(private service: ApiserviceService,private router:Router,private route:ActivatedRoute) {}
}
