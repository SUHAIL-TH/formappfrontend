import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiserviceService } from '../service/apiservice.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
interface Forms {
  fieldName: string;
  type: string;
  option?: string[];
  requied:boolean
}
@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css'],
})
export class AddformComponent {
  constructor(
    private service: ApiserviceService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  type: string = 'text';
  fieldName!: string;
  requied: boolean = false;
  descrsiption: string = '';
  optionsData: boolean = false;
  options: string[] = [];
  option!: string;
  discriptionerror: boolean = false;
  data: Forms[] = [];
  formerror: boolean = false;

  openSnackBar(message: string, action: string) {
    if (this.data.length === 0) {
      this.formerror = true;
      return;
    } else {
      this.formerror = false;
      let newdata = { discription: this.descrsiption, data: this.data };
      this.service.addnewform(newdata).subscribe((res) => {
        this.router.navigate(['/forms']);
      });
    }
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  add() {
    const { type, fieldName, options, requied } = this;
    if (this.descrsiption === '') {
      this.discriptionerror = true;
      return;
    }
    if (fieldName === undefined) {
      this.formerror = true;
      return;
    }
    this.formerror = false;
    this.discriptionerror = false;
    const data = {
      fieldName: fieldName,
      type: type,
      option: options,
      requied: requied,
    };

    this.data.push(data);
    this.options = [];
    this.type = '';
    this.fieldName = '';
    this.optionsData = false;
  }

  typeChagne() {
    if (this.type == 'radio' || this.type === 'checkbox' ||this.type==='dropdown') {
      this.optionsData = true;
    }
  }

  addOption() {
    this.options.push(this.option);
    this.option = '';
  }


  deleteField( fieldName : string, index : number){
 

    this.data = this.data.filter((val) => val != this.data[index])
  
  }
}
