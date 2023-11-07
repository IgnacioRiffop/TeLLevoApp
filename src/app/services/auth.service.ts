import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../shared/user.class';

import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged: any = false;

  constructor(public afAuth: AngularFireAuth, private toastCtrl: ToastController, private router: Router) {
    afAuth.authState.subscribe( user => (this.isLogged = user));
  }
  // get id
  async getLoggedUserId(): Promise<string | null> {
    return new Promise<string | null>((resolve, reject) => {
      this.afAuth.authState.subscribe(user => {
        if (user) {
          const uid = user.uid;
          resolve(uid);
        } else {
          resolve(null);
        }
      });
    });
  }



  // Login
 async onLogin(user: User){
  try{
    return await this.afAuth.signInWithEmailAndPassword(
      user.email,
      user.password
    );
  } catch(error){
    console.log('Error on Login user', error);
    let men = this.toastCtrl.create({
      message: "Usuario o contraseña invalidos!",
      duration: 5000,
      position: 'top'
    });
    (await men).present();
    return null;
  }
 }

 // registro
 async onRegister(user: User){
  try {
    return await this.afAuth.createUserWithEmailAndPassword(
      user.email,
      user.password
    );
  } catch (error) {
    console.log('Error on register user', error)
    return null;
  }
 }
}  


