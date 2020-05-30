import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers/customers.component';
import {FormComponent} from './form/form.component';

const routes: Routes = [
    { path: '', component: CustomersComponent },
    { path: 'form', component: FormComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
