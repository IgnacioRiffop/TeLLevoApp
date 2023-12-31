import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServicioFirebaseService } from '../services/servicio-firebase.service';
import { Vehiculo } from '../interface/vehiculo';
import { signInWithEmailAndPassword,Auth,createUserWithEmailAndPassword} from '@angular/fire/auth';

import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string='';
  pass:string='';

  user : User = new User();
  constructor(private router:Router, private toastCtrl: ToastController, private authSvc: AuthService, private servFire:ServicioFirebaseService, private fireAuth: Auth) { }

  ngOnInit() {
  }

  usuario: any;

  async onLogin() {
    const user = await this.authSvc.onLogin(this.user);
    this.servFire.getDatosUsuario(user.user.uid).subscribe(
      (res) => {
        console.log('Datos del usuario obtenidos:', res);
        this.usuario = res;
        this.router.navigate(['/tabs/tab1']);
        /*
        if(this.usuario.conductor==true){
          this.router.navigate(['/tabs/tab1']);
        } else{
          this.router.navigate(['/home2']);
        }*/
      },
      (error) => {
        console.error('Error al obtener datos del usuario:', error);
      }
    );
  }


  // METODOS VEHICULO
  getVehiculo(){
    this.servFire.getVehiculo('JjScZBrkWDl60aQvGGLA');
  }

  recuperar() {
    this.servFire.getVehiculos();
  }

  grabarVehiculo(){
    let mi_Vehiculo : Vehiculo={
      patente: 'KD-AS-VV',
      capacidad: 4,
      anio: 2020,
      modelo: 'Explorer',
      marca: 'Ford'
    };
    this.servFire.grabarVehiculo(mi_Vehiculo).then(()=>{
      console.log("Grabo");
    }).catch((e)=>{
      console.log(e);
    });
  }

  eliminarVehiculo(){
    this.servFire.eliminarVehiculo('KjKxjNHicwXzwBAS9eqR').then(()=>{
      console.log("elimino");
    }).catch((e)=>{
      console.log(e);
    })
  }

  //METODOS USUARIO
  /*
  getUsuario(){
    this.servFire.getUsuario('ig@gmail.com');
  }*/

  /*
  async tab1(){
    console.log(this.email);
    console.log(this.pass);
    const data={
      'email':this.email,
      'pass':this.pass
    };
    if(this.email=='da.espinosa@duocuc.cl' && this.pass=='david'){
      localStorage.setItem('email',JSON.stringify(data));
      this.router.navigate(['/tabs/tab1']);
    
    }else if(this.email=='ig.riffo@duocuc.cl' && this.pass=='ignacio'){
      localStorage.setItem('email',JSON.stringify(data));
      this.router.navigate(['/home2']);
    }
     else{
      let men = this.toastCtrl.create({
        message: "Nombre de usuario o password incorrecto",
        duration: 5000,
        position: 'bottom'
      });
      (await men).present();
    }
  }*/

  registro(){
    this.router.navigate(['/registro']);
  }
}
