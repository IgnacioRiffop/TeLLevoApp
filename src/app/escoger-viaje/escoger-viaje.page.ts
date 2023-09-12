import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-escoger-viaje',
  templateUrl: './escoger-viaje.page.html',
  styleUrls: ['./escoger-viaje.page.scss'],
})
export class EscogerViajePage implements OnInit {

  constructor(private router:Router) {}

  ngOnInit() {
  }

  viajeencursop(){
    this.router.navigate(['/viaje-en-curso-p']);
  }
}
