import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ganancias',
  templateUrl: './ganancias.page.html',
  styleUrls: ['./ganancias.page.scss'],
})
export class GananciasPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  historialganancia(){
    this.router.navigate(['/historial-ganancia']);
  }


}
