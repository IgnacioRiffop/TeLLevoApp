import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string='';
  pass:string='';
  constructor(private router:Router, private toastCtrl: ToastController) { }

  ngOnInit() {
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
    } else{
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
