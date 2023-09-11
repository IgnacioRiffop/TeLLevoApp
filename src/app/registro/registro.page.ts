import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private router:Router,  private toastCtrl: ToastController) { }

  ngOnInit() {
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
