import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebModuleRoutingModule } from './web-module-routing.module';
import { WebModuleComponent } from './web-module.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    WebModuleComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    WebModuleRoutingModule,
    SharedModule
  ]
})
export class WebModuleModule { }
