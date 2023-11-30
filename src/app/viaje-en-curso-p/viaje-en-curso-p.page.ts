import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as L from "leaflet";
import { ServicioFirebaseService } from '../services/servicio-firebase.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-viaje-en-curso-p',
  templateUrl: './viaje-en-curso-p.page.html',
  styleUrls: ['./viaje-en-curso-p.page.scss'],
})
export class ViajeEnCursoPPage implements OnInit {

  leafletMap: any;
  lat: number = 41.1533;
  
  lng: number = 20.1683;
  
  zoom: number = 8;

  constructor(private router:Router, private servFire: ServicioFirebaseService, private authSvc: AuthService) {}

  uid: string;

  async obtenerUID() {
    try {
      const uid = await this.authSvc.getLoggedUserId();
      if (uid) {
        this.uid = uid; // Asigna el UID a la variable uid de la página
        console.log('UID del usuario logueado:', this.uid);
      } else {
        console.log('Ningún usuario logueado.');
      }
    } catch (error) {
      console.error('Error al obtener el UID del usuario logueado', error);
    }
  }

  viajes: any[];
  idviaje: string;
  viaje:any;
  mostrarElemento: boolean = true;

  async ngOnInit() {
    await this.obtenerUID();

    this.servFire.buscarViajesPorIdUserYEstado('3ivEuqmENNSXHfYgarp0ANjnuV82', true).subscribe(viajes => {
      if (viajes.length > 0) {
        this.viajes = viajes;
        this.viaje = this.viajes[0];
        this.mostrarElemento = true;
        console.log(this.viaje);
        this.idviaje = this.viaje.uid;
        // Ahora puedes trabajar con 'this.viajes' y 'primerViaje' de manera segura
      } else {
        this.mostrarElemento = false;
        console.log('No se encontraron viajes con los criterios especificados');
      }
    });
    this.loadLeafletMap()
  }

  aceptarviaje(){
    this.router.navigate(['/aceptar-viaje']);
  }

  loadLeafletMap() {
    console.log('OK');
    this.leafletMap = new L.Map('mapId');
    this.leafletMap.setView([-33.61169, -70.57577], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.leafletMap);
    var redicon = L.icon({
      iconUrl : './../../assets/img/marcador.png',
      iconSize: [35, 30],
    });
    L.marker([-33.61169, -70.57577], {icon: redicon}).addTo(this.leafletMap);
  }

}
