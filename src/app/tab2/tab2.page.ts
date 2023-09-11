import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  viajes: Viaje[]=[
    {fecha:'08/09/2023',direccion:'Av mexico 2021',salida:'17:20',precio:'1700'},
    {fecha:'05/09/2023',direccion:'Av las nieves 02196',salida:'13:40',precio:'2000'},
    {fecha:'02/09/2023',direccion:'Av las nieves 02196',salida:'15:10',precio:'2000'}
  ]
}
interface Viaje{
  fecha:string;
  direccion:string;
  salida:string;
  precio:string;
}