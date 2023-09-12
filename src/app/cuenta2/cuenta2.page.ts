import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuenta2',
  templateUrl: './cuenta2.page.html',
  styleUrls: ['./cuenta2.page.scss'],
})
export class Cuenta2Page implements OnInit {

  constructor(private router:Router) {}

  ngOnInit() {
  }
  
  login(){
    this.router.navigate(['/login']);
  }

}
