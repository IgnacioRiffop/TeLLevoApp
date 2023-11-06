import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
 class AuthGuard {
  constructor(private authSvc: AuthService,private router: Router) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.authSvc.isLogged){
      return true;
    }
    console.log('Accceso denegado!');
    this.router.navigate(['/login']);
    return false;
  }
}   

  export const IsAuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean =>{
  return inject(AuthGuard).canActivate(route,state);
}

