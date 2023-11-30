import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioFirebaseService } from '../services/servicio-firebase.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  arreglo = [];
  arr = new Array();
  email:string='';

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
  

  datosUsuario1: any;
  isConductor: boolean = true;

  async ngOnInit() {
    await this.obtenerUID();
    this.servFire.getDatosUsuario(this.uid).subscribe((datos) => {
      this.datosUsuario1 = datos;
      console.log('Datos del usuario:', this.datosUsuario1);
      if(this.isConductor==this.datosUsuario1.conductor){
        console.log('ES CONDUCTOR');
      }else{
        console.log('NO ES CONDUCTOR');
        this.isConductor=false;
      }

      // Puedes realizar otras operaciones con los datos del usuario aquí
    });
    
    var data = localStorage.getItem('email');
    console.log(data);
    if(data!=null){
      console.log("no es nulo");
      this.arreglo=JSON.parse(data);
      console.log(this.arreglo);
      this.arr.push(this.arreglo);
      this.arr.forEach(element => {
        console.log(element.email);
        this.email=element.email;
      })

    }
  }
  
  nuevoviaje(){
    this.servFire.buscarViajesPorIdUserYEstado(this.uid, true).subscribe(viajes => {
      if (viajes.length > 0) {
        this.viajes = viajes;
        const viaje = this.viajes[0];
        this.router.navigate(['/viaje-en-curso']);
        // Ahora puedes trabajar con 'this.viajes' y 'primerViaje' de manera segura
      } else {
        this.router.navigate(['/nuevo-viaje']);
        console.log('No se encontraron viajes con los criterios especificados');
      }
    });
  }
  ganancias(){
    this.router.navigate(['/ganancias']);
  }
  buscarviaje(){
    this.router.navigate(['/escoger-viaje']);
  }

  escogerviaje(){
    this.router.navigate(['/escoger-viaje']);
  }
}
