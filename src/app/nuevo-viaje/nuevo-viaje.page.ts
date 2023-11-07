import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServicioFirebaseService } from '../services/servicio-firebase.service';
import { Viaje } from '../interface/viaje';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nuevo-viaje',
  templateUrl: './nuevo-viaje.page.html',
  styleUrls: ['./nuevo-viaje.page.scss'],
})
export class NuevoViajePage implements OnInit {
  direccion: string = '';
  hora: string = '';
  valor: number = 0;
  cupo: number = 0;
  estado: boolean=true;
  

  constructor(private router: Router, private toastCtrl: ToastController, private servFire: ServicioFirebaseService, private authSvc: AuthService) { }

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
  
  

  async ngOnInit() {
    await this.obtenerUID();
    this.getViaje();
  }

  viajeencurso(){
    this.router.navigate(['/viaje-en-curso']);
  }


  // METODOS VIAJE
  getViaje(){
    this.servFire.getViaje('JjScZBrkWDl60aQvGGLA');
  }


  recuperar() {
    this.servFire.getViajes();
  }

  grabarViaje() {
    // Crear un objeto Viaje con los datos del formulario
    let mi_Viaje: Viaje = {
      direccion: this.direccion,
      hora: this.hora,
      valor: this.valor,
      cupo: this.cupo,
      estado: this.estado,
      iduser: this.uid,
    };

    // Llamar al servicio Firebase para grabar el viaje
    this.servFire.grabarViaje(mi_Viaje).then(() => {
      console.log("Viaje grabado con éxito");
    }).catch((e) => {
      console.error("Error al grabar el viaje:", e);
    });
  }

  eliminarViaje(){
    this.servFire.eliminarViaje('UjFdJ0QCyXMEJUo1BdsZ').then(()=>{
      console.log("eliminoViaje");
    }).catch((e)=>{
      console.log(e);
    })
  }
}
