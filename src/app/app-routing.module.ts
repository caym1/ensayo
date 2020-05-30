import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
    { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
    { path: 'forms', loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule) },
    { path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
