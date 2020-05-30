import { Component, OnInit } from '@angular/core';
import {ServicesService} from "../../orders/services.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  list: Array<{nombre: string, edad: number}>;
  constructor(public serviceOrder: ServicesService) {
    this.list = [
      {nombre: 'Adan', edad: 28},
      {nombre: 'Carmen', edad: 26},
      {nombre: 'Emanuel ', edad: 30},
    ];
  }

  ngOnInit(): void {
  }

  guardarCustomer(customer: {nombre: string, edad: number}){
    console.log(customer);
  }
}
