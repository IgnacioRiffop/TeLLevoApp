import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServicioFirebaseService } from '../services/servicio-firebase.service';
import { Vehiculo } from '../interface/vehiculo';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string='';
  pass:string='';
  constructor(private router:Router, private toastCtrl: ToastController,private servFire:ServicioFirebaseService) { }

  ngOnInit() {
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


  async tab1(){
    console.log(this.email);
    console.log(this.pass);
    const data={
      'email':this.email,
      'pass':this.pass
    };
    if(this.email=='david' && this.pass=='david'){
      localStorage.setItem('email',JSON.stringify(data));
      this.router.navigate(['/tabs/tab1']);
    
    }else if(this.email=='ignacio' && this.pass=='ignacio'){
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
  }

  registro(){
    this.router.navigate(['/registro']);
  }
}
