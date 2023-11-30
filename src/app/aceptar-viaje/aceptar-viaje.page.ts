import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-aceptar-viaje',
  templateUrl: './aceptar-viaje.page.html',
  styleUrls: ['./aceptar-viaje.page.scss'],
})
export class AceptarViajePage implements OnInit {

  constructor(private router:Router) {}

  ngOnInit() {
  }

  finalizarviaje(){
    this.router.navigate(['/home2']);
  }

}
