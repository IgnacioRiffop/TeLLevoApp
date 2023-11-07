import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { customValidators } from '../utils/custom-validators';

import { AuthService } from '../services/auth.service';
import { ServicioFirebaseService } from '../services/servicio-firebase.service';
import { User } from '../shared/user.class';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  //FORMULARIO
  /*
  form = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
    apellido: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required]),
    confirmpass: new FormControl('')
  })

  confirmPassValidator(){
    this.form.controls.confirmpass.setValidators([
      Validators.required,
      customValidators.matchValues(this.form.controls.pass)
    ])

    this.form.controls.confirmpass.updateValueAndValidity();
  }*/

  user: User = new User();

  constructor(private router:Router,  private toastCtrl: ToastController, private authSvc: AuthService, private servFire:ServicioFirebaseService) { }

  ngOnInit() {
    //this.confirmPassValidator()
  }

  async onRegister(){
    const user = await this.authSvc.onRegister(this.user);
    const uid = user.user.uid;

    const nombre = this.user.nombre;
    const apellido = this.user.apellido;
    const celular = this.user.celular;
    const conductor = false;

    // Agrega el nombre y apellido a la base de datos utilizando el UID
    this.servFire.grabarUsuario(uid,nombre,apellido,celular,conductor);

    if (user) {
      let men = this.toastCtrl.create({
        message: "Registro realizado correctamente!",
        duration: 5000,
        position: 'top'
      });
      (await men).present();
      this.router.navigate(['/login']);
    }
  }


  login(){
    this.router.navigate(['/login']);
  }

  async loginreg(){
    let men = this.toastCtrl.create({
      message: "Registro realizado correctamente!",
      duration: 5000,
      position: 'bottom'
    });
    (await men).present();
    this.router.navigate(['/login']);
  }
}
