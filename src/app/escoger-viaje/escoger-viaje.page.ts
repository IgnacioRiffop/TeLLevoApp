import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ServicioFirebaseService } from '../services/servicio-firebase.service';

@Component({
  selector: 'app-escoger-viaje',
  templateUrl: './escoger-viaje.page.html',
  styleUrls: ['./escoger-viaje.page.scss'],
})
export class EscogerViajePage implements OnInit {

  constructor(private router:Router, private authSvc: AuthService, private servFire: ServicioFirebaseService) {}

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
  }

  viajeencursop(){
    this.router.navigate(['/viaje-en-curso-p']);
  }
}
