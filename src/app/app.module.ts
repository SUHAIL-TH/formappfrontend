import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddformComponent } from './addform/addform.component';
import { FormlistComponent } from './formlist/formlist.component';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';

import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // If you want to use icons
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component'
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormresponseComponent } from './formresponse/formresponse.component';
import { SubmitsuccessComponent } from './submitsuccess/submitsuccess.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddformComponent,
    FormlistComponent,
    FormComponent,
    NavbarComponent,
    FooterComponent,
    PagenotfoundComponent,
    FormresponseComponent,
    SubmitsuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({timeOut: 3000, 
    positionClass: 'toast-top-right',
    closeButton: true, }),
    HttpClientModule,
    MatSnackBarModule,

    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
