import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as L from "leaflet";
import { ServicioFirebaseService } from '../services/servicio-firebase.service';
import { AuthService } from '../services/auth.service';

import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

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
    this.servFire.buscarViajesPorIdUserYEstado(this.uid, true).subscribe(viajes => {
      if (viajes.length > 0) {
        this.viajes = viajes;
        console.log('Datos de los viajes:', viajes);
        // Haz lo que necesites con los datos
      } else {
        console.log('No se encontraron viajes con los criterios especificados');
      }
    });
  }

  idviaje: string;

  async ngOnInit() {
    await this.obtenerUID();
    this.servFire.buscarViajesPorIdUserYEstado(this.uid, true).subscribe(viajes => {
      if (viajes.length > 0) {
        this.viajes = viajes;
        const viaje = this.viajes[0];
        console.log(viaje);
        this.idviaje = viaje.uid;
        // Ahora puedes trabajar con 'this.viajes' y 'primerViaje' de manera segura
      } else {
        console.log('No se encontraron viajes con los criterios especificados');
      }
    });
    this.loadLeafletMap();
    /*
    const primerViaje = this.viajes[0];
    const direccion = primerViaje.direccion;
    const hora = primerViaje.hora;
    const iduser = primerViaje.iduser;*/
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

  eliminarViaje(){
    this.servFire.buscarViajesPorIdUserYEstadoUid(this.uid, true).subscribe(viajes => {
      if (viajes.length > 0) {
        this.viajes = viajes;
        const viaje = this.viajes[0];
        console.log('viaje uid:' , viaje.uid);
        console.log(viaje)

        this.servFire.eliminarViaje(viaje.uid).then(()=>{
          
          console.log("eliminoViaje");
          this.router.navigate(['/tabs/tab1']);
        }).catch((e)=>{
          console.log(e);
        })
        // Ahora puedes trabajar con 'this.viajes' y 'primerViaje' de manera segura
      } else {
        console.log('No se encontraron viajes con los criterios especificados');
      }
    });

  }

  direccionViaje(direccion : string){
    let ejecutado = false;

    this.servFire.buscarViajesPorIdUserYEstadoUid(this.uid, true).subscribe(viajes => {
      if (!ejecutado && viajes.length > 0) {
        this.viajes = viajes;
        const viaje = this.viajes[0];
        console.log('viaje uid:' , viaje.uid);
        console.log(viaje)

        this.servFire.direccionViaje(viaje.uid, direccion).then(()=>{
          console.log("direccionViaje");
          ejecutado = true;
        }).catch((e)=>{
          console.log(e);
          ejecutado = true;
        })
        // Ahora puedes trabajar con 'this.viajes' y 'primerViaje' de manera segura
      } else {
        console.log('No se encontraron viajes con los criterios especificados');
      }
    });
  }

  lngFin:number=0;
  latFin:number=0;

  ir() {
    var duoc = [-70.57902808465514, -33.59778231829415];
    var map = new mapboxgl.Map({
      accessToken: environment.apiMB,
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [duoc[0], duoc[1]],
      zoom: 13,
    });

    var startPoint = duoc;
    var endPoint = [this.lngFin, this.latFin];

    // Utiliza la API de direcciones para obtener la ruta entre los dos puntos
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${startPoint[0]},${startPoint[1]};${endPoint[0]},${endPoint[1]}?steps=true&geometries=geojson&access_token=${environment.apiMB}`
    )
      .then((response) => response.json())
      .then((data) => {
        var route = data.routes[0].geometry;

        // Añade la ruta al mapa
        map.on('load', function () {
          map.addLayer({
            id: 'route',
            type: 'line',
            source: {
              type: 'geojson',
              data: {
                type: 'Feature',
                properties: {},
                geometry: route,
              },
            },
            layout: {
              'line-join': 'round',
              'line-cap': 'round',
            },
            paint: {
              'line-color': '#3887be',
              'line-width': 5,
              'line-opacity': 0.75,
            },
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  direccion:string='';

  buscar(){
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.direccion}.json?access_token=${environment.apiMB}`
    )
      .then((response) => response.json())
      .then((data) => {
        var route = data;
        

        console.log(route["features"]);    
        var largo= route["features"].length;
        console.log(largo);
        if (largo>0) {
          this.lngFin=route["features"][0]["center"][0];
          this.latFin=route["features"][0]["center"][1];

          // Guardar la dirección en el localStorage
          const direccionCompleta = route['features'][0]['place_name'];
          this.direccionViaje(direccionCompleta);

          //localStorage.setItem('direccionGuardada', direccionCompleta);
        
        }
        for (let index = 0; index < route["features"].length; index++) {
          const element = route["features"][index]["place_name"];
          console.log(element);
          const lng=route["features"][index]["center"][0];
          const lat=route["features"][index]["center"][1];
          console.log((index+1)+") Lng:"+lng+" Lat:"+lat);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }


}
