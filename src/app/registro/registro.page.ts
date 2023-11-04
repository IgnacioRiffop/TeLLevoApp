import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { customValidators } from '../utils/custom-validators';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  //FORMULARIO
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
  }

  constructor(private router:Router,  private toastCtrl: ToastController) { }

  ngOnInit() {
    this.confirmPassValidator()
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
