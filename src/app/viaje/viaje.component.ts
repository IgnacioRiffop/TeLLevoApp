import { Component, OnInit, Input } from '@angular/core';
import { IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.scss'],
})
export class ViajeComponent  implements OnInit {
  @Input() fecha: string='';
  @Input() direccion: string='';
  @Input() salida: string='';
  @Input() precio: string='';
  constructor() { }

  ngOnInit() {}

}
