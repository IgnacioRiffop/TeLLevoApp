import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as L from "leaflet";

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

  constructor() { }

  ngOnInit() {
    this.loadLeafletMap();
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
