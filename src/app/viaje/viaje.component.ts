import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router:Router) { }

  ngOnInit() {}

  
  pasajeros(){
    this.router.navigate(['/pasajeros']);
  }
}
