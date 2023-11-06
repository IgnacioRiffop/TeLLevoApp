import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServicioFirebaseService } from '../services/servicio-firebase.service';
import { Viaje } from '../interface/viaje';

@Component({
  selector: 'app-nuevo-viaje',
  templateUrl: './nuevo-viaje.page.html',
  styleUrls: ['./nuevo-viaje.page.scss'],
})
export class NuevoViajePage implements OnInit {
  direccion: string = '';
  hora: number = 0;
  valor: number = 0;

  constructor(private router: Router, private toastCtrl: ToastController, private servFire: ServicioFirebaseService) { }

  ngOnInit() {
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
      valor: this.valor
    };

    // Llamar al servicio Firebase para grabar el viaje
    this.servFire.grabarViaje(mi_Viaje).then(() => {
      console.log("Viaje grabado con éxito");
      // Puedes redirigir al usuario a otra página o mostrar un mensaje de éxito aquí
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
