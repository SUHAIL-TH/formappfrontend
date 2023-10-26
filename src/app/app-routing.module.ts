import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { AddformComponent } from './addform/addform.component';
import { FormlistComponent } from './formlist/formlist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormresponseComponent } from './formresponse/formresponse.component';
import { SubmitsuccessComponent } from './submitsuccess/submitsuccess.component';
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"forms",component:FormlistComponent},
  {path:"addform",component:AddformComponent},
  {path:"singleform/:id",component:FormComponent},
  {path:'response/:id',component:FormresponseComponent},
  {path:"formsubmitsuccess",component:SubmitsuccessComponent},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
