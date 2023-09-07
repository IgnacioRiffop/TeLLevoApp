import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  arreglo = [];
  arr = new Array();
  email:string='';

  constructor(private router:Router) {}

  ngOnInit() {
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
  nuevoviaje(){
    this.router.navigate(['/nuevo-viaje']);
  }
  ganancias(){
    this.router.navigate(['/ganancias']);
  }
}
