import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ServicioFirebaseService } from '../services/servicio-firebase.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private servFire: ServicioFirebaseService, private authSvc: AuthService) {}
  viajes: Viaje[]=[
    {fecha:'08/09/2023',direccion:'Av mexico 2021',salida:'17:20',precio:'1700'},
    {fecha:'05/09/2023',direccion:'Av las nieves 02196',salida:'13:40',precio:'2000'},
    {fecha:'02/09/2023',direccion:'Av las nieves 02196',salida:'15:10',precio:'2000'}
  ]


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

  datosUsuario1: any;
  isConductor: boolean = true;
  async ngOnInit() {
    await this.obtenerUID();
    this.servFire.getDatosUsuario(this.uid).subscribe((datos) => {
      this.datosUsuario1 = datos;
      console.log('Datos del usuario:', this.datosUsuario1);
      if(this.isConductor==this.datosUsuario1.conductor){
        console.log('ES CONDUCTOR');
      }else{
        console.log('NO ES CONDUCTOR');
        this.isConductor=false;
      }

      // Puedes realizar otras operaciones con los datos del usuario aquí
    });
  }
}
interface Viaje{
  fecha:string;
  direccion:string;
  salida:string;
  precio:string;
}