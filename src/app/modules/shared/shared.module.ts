import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesRoutingModule } from 'src/app/pages/home/pages-routing.modules';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    MDBBootstrapModule
  ]
})
export class SharedModule { }
