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
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.leafletMap);
    var redicon = L.icon({
      iconUrl : './../../assets/img/marcador.png',
      iconSize: [35, 30],
    });
    L.marker([51.5, -0.09], {icon: redicon}).addTo(this.leafletMap);
  }
}
