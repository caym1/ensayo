import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './lists/list.component';

import {CustomersModule} from '../customers/customers.module';
import {OrdersModule} from '../orders/orders.module';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    CustomersModule,
    OrdersModule
  ]
})
export class ListModule { }
