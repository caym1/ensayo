import { Component, OnInit } from '@angular/core';
import {ServicesService} from "../services.service";

@Component({
  selector: 'app-form-orders',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(public service: ServicesService) { }

  ngOnInit(): void {
  }

}
