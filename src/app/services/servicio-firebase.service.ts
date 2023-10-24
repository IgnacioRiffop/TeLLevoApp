import { Injectable } from '@angular/core';

import { Vehiculo } from '../interface/vehiculo';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServicioFirebaseService {

  private vehiculoColeccion : AngularFirestoreCollection<Vehiculo>;
  constructor(private afs: AngularFirestore) {
    this.vehiculoColeccion = afs.collection<Vehiculo>('Vehiculo')
   }

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
}
