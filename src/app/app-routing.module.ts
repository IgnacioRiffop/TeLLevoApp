import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IsAuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule), canActivate: [IsAuthGuard]
  },
  
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate: [IsAuthGuard]
  },
  {
    path: 'nuevo-viaje',
    loadChildren: () => import('./nuevo-viaje/nuevo-viaje.module').then( m => m.NuevoViajePageModule), canActivate: [IsAuthGuard]
  },
  {
    path: 'ganancias',
    loadChildren: () => import('./ganancias/ganancias.module').then( m => m.GananciasPageModule), canActivate: [IsAuthGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'pasajeros',
    loadChildren: () => import('./pasajeros/pasajeros.module').then( m => m.PasajerosPageModule), canActivate: [IsAuthGuard]
  },
  {
    path: 'historial-ganancia',
    loadChildren: () => import('./historial-ganancia/historial-ganancia.module').then( m => m.HistorialGananciaPageModule), canActivate: [IsAuthGuard]
  },
  {
    path: 'viaje-en-curso',
    loadChildren: () => import('./viaje-en-curso/viaje-en-curso.module').then( m => m.ViajeEnCursoPageModule), canActivate: [IsAuthGuard]
  },
  {
    path: 'home2',
    loadChildren: () => import('./home2/home2.module').then( m => m.Home2PageModule), canActivate: [IsAuthGuard]
  },
  {
    path: 'cuenta2',
    loadChildren: () => import('./cuenta2/cuenta2.module').then( m => m.Cuenta2PageModule), canActivate: [IsAuthGuard]
  },
  {
    path: 'historial2',
    loadChildren: () => import('./historial2/historial2.module').then( m => m.Historial2PageModule), canActivate: [IsAuthGuard]
  },
  {
    path: 'buscar-viaje',
    loadChildren: () => import('./buscar-viaje/buscar-viaje.module').then( m => m.BuscarViajePageModule), canActivate: [IsAuthGuard]
  },
  {
    path: 'viaje-en-curso-p',
    loadChildren: () => import('./viaje-en-curso-p/viaje-en-curso-p.module').then( m => m.ViajeEnCursoPPageModule), canActivate: [IsAuthGuard]
  },
  {
    path: 'escoger-viaje',
    loadChildren: () => import('./escoger-viaje/escoger-viaje.module').then( m => m.EscogerViajePageModule), canActivate: [IsAuthGuard]
  }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
