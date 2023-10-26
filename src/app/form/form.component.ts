import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

interface Formss {
  fieldName: string;
  type: string;
  option?: string[];
  requied: boolean;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: ApiserviceService,
    private router: Router
  ) {}

  formid: any;
  formFields: any;
  formFieldsArray: Formss[] = []; // Change the type to Formss[]
  description!: string;
  form!: FormGroup;
  ressubmit = false;
  optionArray : string[] = []

  ngOnInit(): void {
    this.formid = this.route.snapshot.paramMap.get('id');
    this.getformdata(this.formid);
  }

  getformdata(id: string) {
    this.service.singlefrom(id).subscribe((res) => {
      this.formFields = res;
      this.description = this.formFields.discription;
      this.formFieldsArray = Object.values(this.formFields.data); // Convert to an array

      this.form = this.fb.group({});

      this.formFieldsArray.forEach((field: Formss) => {
        if (field.requied === true) {
          this.form.addControl(
            field.fieldName,
            new FormControl('', Validators.required)
          );
        } else {
          this.form.addControl(field.fieldName, new FormControl());
        }
      });
    });
  }

  submit() {
    let data = this.form.getRawValue();
    this.ressubmit = true;

    console.log(data)
    if (!this.form.valid) {
      return;
    } else {
      data.option = this.optionArray
      let response = {
        formid: this.formFields._id,
        data: data,
      };

      this.service.addresponse(response).subscribe((res) => {
        this.router.navigate(['/formsubmitsuccess']);
      });
    }
  }
  
}







//   onChange(event : Event, name : string){
//   if(event.target instanceof HTMLInputElement){
//       const data = this.form.getRawValue()
//       console.log(data, name)
//       // typeof data[name] == 'boolean' ? data[name] = [] : data[name].push(name)
//       this.optionArray.push(event.target.value)
//       data[name] = [  ]
//       data[name] = this.optionArray
//       this.form.setValue(data) 
//       console.log(data)
//       let value = event.target.value
//     if( event.target.checked){
//       this.optionArray.push(value)
//     }else {
//       this.optionArray = this.optionArray.filter((val) => val != value)
//     }
//   }
// }
