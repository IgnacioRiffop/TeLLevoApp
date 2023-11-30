import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuenta2',
  templateUrl: './cuenta2.page.html',
  styleUrls: ['./cuenta2.page.scss'],
})
export class Cuenta2Page implements OnInit {

  constructor(private router:Router, private afAuth: AngularFireAuth) {}

  ngOnInit() {
  }

  onLogout() {
    this.afAuth.signOut();
    this.router.navigate(['/login']);
  }
  
  login(){
    this.router.navigate(['/login']);
  }

}
