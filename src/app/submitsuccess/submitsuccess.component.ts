import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submitsuccess',
  templateUrl: './submitsuccess.component.html',
  styleUrls: ['./submitsuccess.component.css']
})
export class SubmitsuccessComponent {
  constructor(private router:Router){}

  submit(){
    this.router.navigate(['/forms'])
  }
}
