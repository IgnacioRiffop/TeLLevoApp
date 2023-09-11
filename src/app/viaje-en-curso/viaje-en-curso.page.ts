import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viaje-en-curso',
  templateUrl: './viaje-en-curso.page.html',
  styleUrls: ['./viaje-en-curso.page.scss'],
})
export class ViajeEnCursoPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  inicio(){
    this.router.navigate(['/tabs/tab1']);
  }
}
