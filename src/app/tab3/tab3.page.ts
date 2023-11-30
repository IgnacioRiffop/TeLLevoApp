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
  arreglo = [];
  arr = new Array();
  email:string='';
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
  isConductor: boolean = true;

  async ngOnInit() {
    await this.obtenerUID();

    this.servFire.getDatosUsuario(this.uid).subscribe((datos) => {
      this.datosUsuario = datos;
      console.log('Datos del usuario:', this.datosUsuario);
      if(this.isConductor==this.datosUsuario.conductor){
        console.log('ES CONDUCTOR');
      }else{
        console.log('NO ES CONDUCTOR');
        this.isConductor=false;
      }
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

  
}
