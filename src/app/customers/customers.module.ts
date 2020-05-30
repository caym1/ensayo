import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [CustomersComponent, FormComponent],
  exports: [
    FormComponent,
    CustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule
  ]
})
export class CustomersModule { }
