import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private router:Router, private authSvc: AuthService, private afAuth: AngularFireAuth) {}

  onLogout(){
    this.afAuth.signOut();
    this.router.navigate(['/login']);
  }



  login(){
    this.router.navigate(['/login']);
  }
}
