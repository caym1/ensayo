import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(public serviceOrder: ServicesService) { }

  ngOnInit(): void {
  }

}
