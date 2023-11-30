import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Importa AngularFirestore para Firestore
import { ServicioFirebaseService } from '../services/servicio-firebase.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  user: any; // Variable para almacenar los datos del usuario

  constructor(
    private router: Router,
    private authSvc: AuthService,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private servFire: ServicioFirebaseService // Inyecta AngularFirestore
  ) {
    // Suscríbete a cambios en la autenticación
    this.afAuth.authState.subscribe(user => {
      if (user) {
        // El usuario está autenticado, puedes acceder a sus datos
        this.user = user;

        // Ahora, si deseas recuperar más datos del usuario (por ejemplo, desde Firestore)
        this.firestore.collection('users').doc(user.uid).valueChanges().subscribe(data => {
          console.log('Datos adicionales del usuario:', data);
        });
      } else {
        // El usuario no está autenticado
        this.user = null;
      }
    });
  }

  onLogout() {
    this.afAuth.signOut();
    this.router.navigate(['/login']);
  }

  login() {
    this.router.navigate(['/login']);
  }

  confivehiculo(){
    this.router.navigate(['/confi-vehiculo']);
  }

  confiperfil(){
    this.router.navigate(['/confi-perfil']);
  }

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
  }

  
}
