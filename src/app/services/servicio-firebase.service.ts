import { Injectable } from '@angular/core';

import { Vehiculo } from '../interface/vehiculo';
import { Usuario } from '../interface/usuario';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServicioFirebaseService {

  private vehiculoColeccion : AngularFirestoreCollection<Vehiculo>;
  private usuarioColeccion : AngularFirestoreCollection<Usuario>;
  constructor(private afs: AngularFirestore) {
    this.vehiculoColeccion = afs.collection<Vehiculo>('Vehiculo')
    this.usuarioColeccion = afs.collection<Usuario>('Usuario')
   }

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

  //METODOS USUARIO
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
  }
}
