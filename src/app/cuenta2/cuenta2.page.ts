import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ServicioFirebaseService } from '../services/servicio-firebase.service';

@Component({
  selector: 'app-cuenta2',
  templateUrl: './cuenta2.page.html',
  styleUrls: ['./cuenta2.page.scss'],
})
export class Cuenta2Page implements OnInit {
  arreglo = [];
  arr = new Array();
  email:string='';

  constructor(private router:Router, private afAuth: AngularFireAuth,private authSvc: AuthService, private servFire: ServicioFirebaseService) {}

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

  datosUsuario: any;

  async ngOnInit() {
    await this.obtenerUID();

    this.servFire.getDatosUsuario(this.uid).subscribe((datos) => {
      this.datosUsuario = datos;
      console.log('Datos del usuario:', this.datosUsuario);

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


  onLogout() {
    this.afAuth.signOut();
    this.router.navigate(['/login']);
  }
  
  login(){
    this.router.navigate(['/login']);
  }

}
