import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-viaje',
  templateUrl: './nuevo-viaje.page.html',
  styleUrls: ['./nuevo-viaje.page.scss'],
})
export class NuevoViajePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  viajeencurso(){
    this.router.navigate(['/viaje-en-curso']);
  }

}
