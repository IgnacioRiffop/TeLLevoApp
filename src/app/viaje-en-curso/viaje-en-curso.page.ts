import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as L from "leaflet";
import { ServicioFirebaseService } from '../services/servicio-firebase.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-viaje-en-curso',
  templateUrl: './viaje-en-curso.page.html',
  styleUrls: ['./viaje-en-curso.page.scss'],
})
export class ViajeEnCursoPage implements OnInit {

  leafletMap: any;
  lat: number = 41.1533;
  
  lng: number = 20.1683;
  
  zoom: number = 8;
  constructor(private router:Router, private servFire: ServicioFirebaseService, private authSvc: AuthService) { }

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

  getViaje(){
    this.servFire.buscarViajesPorIdUserYEstado('idDelUsuario', true).subscribe(viajes => {
      if (viajes.length > 0) {
        this.viajes = viajes;
        console.log('Datos de los viajes:', viajes);
        // Haz lo que necesites con los datos
      } else {
        console.log('No se encontraron viajes con los criterios especificados');
      }
    });
  }

  async ngOnInit() {
    this.getViaje();
    await this.obtenerUID();
    this.loadLeafletMap();
  }

  inicio(){
    this.router.navigate(['/tabs/tab1']);
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
