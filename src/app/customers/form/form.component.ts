import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form-customer',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() customer: {nombre: string, edad: number};
  @Output() propagar = new EventEmitter<{ nombre: string, edad: number }>();
  constructor() { }

  ngOnInit(): void {
  }
  guardar(){
    this.propagar.emit(this.customer);
  }
}
