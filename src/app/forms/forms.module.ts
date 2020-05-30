import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms/forms.component';
import {CustomersModule} from '../customers/customers.module';
import {OrdersModule} from '../orders/orders.module';


@NgModule({
  declarations: [FormsComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    CustomersModule,
    OrdersModule
  ]
})
export class FormsModule { }
