import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  list: Array<{monto: number, fecha: any}>;
  constructor() {
    this.list = [
      {monto: 10, fecha: new Date()},
      {monto: 11, fecha: new Date()},
      {monto: 12, fecha: new Date()},
      {monto: 13, fecha: new Date()},
      {monto: 14, fecha: new Date()},
      {monto: 15, fecha: new Date()},
    ];
  }
  getList(){
    return this.list;
  }
}
