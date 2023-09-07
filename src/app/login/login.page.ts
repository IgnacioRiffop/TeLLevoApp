import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string='';
  pass:string='';
  constructor(private router:Router) { }

  ngOnInit() {
  }
  tab1(){
    console.log(this.email);
    console.log(this.pass);
    const data={
      'email':this.email,
      'pass':this.pass
    };
    localStorage.setItem('email',JSON.stringify(data));
    this.router.navigate(['/tabs/tab1']);
  }
}
