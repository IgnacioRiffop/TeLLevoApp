import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as L from "leaflet";

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
  constructor(private router:Router) { }

  ngOnInit() {
    this.loadLeafletMap();
  }

  inicio(){
    this.router.navigate(['/tabs/tab1']);
  }
  loadLeafletMap() {
    console.log('OK');
    this.leafletMap = new L.Map('mapId');
    this.leafletMap.setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.leafletMap);
    L.marker([51.5, -0.09]).addTo(this.leafletMap)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();
  }
}
