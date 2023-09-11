import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'nuevo-viaje',
    loadChildren: () => import('./nuevo-viaje/nuevo-viaje.module').then( m => m.NuevoViajePageModule)
  },
  {
    path: 'ganancias',
    loadChildren: () => import('./ganancias/ganancias.module').then( m => m.GananciasPageModule)
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
    loadChildren: () => import('./pasajeros/pasajeros.module').then( m => m.PasajerosPageModule)
  },
  {
    path: 'historial-ganancia',
    loadChildren: () => import('./historial-ganancia/historial-ganancia.module').then( m => m.HistorialGananciaPageModule)
  },
  {
    path: 'viaje-en-curso',
    loadChildren: () => import('./viaje-en-curso/viaje-en-curso.module').then( m => m.ViajeEnCursoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
