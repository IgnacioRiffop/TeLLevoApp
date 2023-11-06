import { Injectable } from '@angular/core';

import { Vehiculo } from '../interface/vehiculo';
import { Usuario } from '../interface/usuario';
import { Viaje } from '../interface/viaje';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class ServicioFirebaseService {

  private vehiculoColeccion : AngularFirestoreCollection<Vehiculo>;
  private usuarioColeccion : AngularFirestoreCollection<Usuario>;
  private viajeColeccion : AngularFirestoreCollection<Viaje>;

  constructor(private afs: AngularFirestore, private auth: AngularFireAuth) {
    this.vehiculoColeccion = afs.collection<Vehiculo>('Vehiculo')
    this.usuarioColeccion = afs.collection<Usuario>('Usuario')
    this.viajeColeccion = afs.collection<Viaje>('Viaje')
  }

  async grabarUsuario(uid: string, nombre: string, apellido:string, celular:string){
    try {
      const datauser = this.afs.collection('Usuario').doc(uid);

      await datauser.set({nombre: nombre, apellido:apellido, celular:celular});
      console.log('Nombre y apellidos agregados')
    } catch (error) {
      console.error('Error al agregar nombre y apellido a la base de datos', error);
    }

  }

  // AUTENTICACION 
  /*
  login(user: Usuario){
    return this.auth.signInWithEmailAndPassword(user.email, user.pass)
  }

  registro(user: Usuario){
    return this.auth.createUserWithEmailAndPassword(user.email, user.pass)
  }*/
  // FIN AUTENTICACION

  // METODOS VEHICULO
  getVehiculos(){
    this.afs.collection('Vehiculo').valueChanges().subscribe(
      (res)=>{
        console.log("ok");
        console.log(res);
      }
    )
  }

  grabarVehiculo(Vehiculo : Vehiculo){
    return this.vehiculoColeccion.add(Vehiculo);
  }

  eliminarVehiculo(id : string){
    return this.vehiculoColeccion.doc(id).delete();
  }

  getVehiculo(id : string){
    return this.vehiculoColeccion.doc(id).valueChanges().subscribe(
      (res)=>{
        console.log("get");
        console.log(res);
      }
    )
  }


  getViajes(){
    this.afs.collection('Viaje').valueChanges().subscribe(
      (res)=>{
        console.log("ok");
        console.log(res);
      }
    )
  }

  grabarViaje(Viaje : Viaje){
    return this.viajeColeccion.add(Viaje);
  }

  eliminarViaje(id : string){
    return this.viajeColeccion.doc(id).delete();
  }

  getViaje(id : string){
    return this.viajeColeccion.doc(id).valueChanges().subscribe(
      (res)=>{
        console.log("get");
        console.log(res);
      }
    )
  }


  //METODOS USUARIO
  /*
  getUsuario(email: string){
  const query = this.usuarioColeccion.ref.where('email', '==', email);
  query.get().then(querySnapshot => {
      if (querySnapshot.empty) {
          console.log('no data found');
      } else if (querySnapshot.size > 1) {
          console.log('no unique data');
      } else {
          querySnapshot.forEach(documentSnapshot => {
              this.afs.doc(documentSnapshot.ref).valueChanges().subscribe(console.log);
              });
          }
      });
    return this.usuarioColeccion.ref.where('email', '==', email).get();
  }*/
}
