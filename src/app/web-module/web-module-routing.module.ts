import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebModuleComponent } from './web-module.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"",
    component:WebModuleComponent,
    children:[
      {
        path:"",
        component:HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebModuleRoutingModule { }
