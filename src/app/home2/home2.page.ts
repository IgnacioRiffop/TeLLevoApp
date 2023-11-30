import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {

  constructor(private router:Router) {}

  ngOnInit() {
  }

  escogerviaje(){
    this.router.navigate(['/escoger-viaje']);
  }
}
