import { Injectable } from '@angular/core';

import { Vehiculo } from '../interface/vehiculo';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class ServicioFirebaseService {

  constructor(private afs: AngularFirestore) { }

  getVehiculos(){
    this.afs.collection('vehiculo').valueChanges().subscribe(
      (res)=>{
        console.log("ok");
      }
    )
  }
}
