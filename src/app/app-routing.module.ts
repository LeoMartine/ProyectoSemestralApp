import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoIngresarGuard } from './no-ingresar.guard';
import { IngresarGuard } from './ingresar.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresarGuard]
  },
  {
    path: 'crear',
    loadChildren: () => import('./crear/crear.module').then( m => m.CrearPageModule),
    canActivate: [NoIngresarGuard]
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule),
    canActivate: [IngresarGuard]
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./recuperar/recuperar.module').then( m => m.RecuperarPageModule),
    canActivate: [NoIngresarGuard]
  },
  {
    path: 'edit-pass',
    loadChildren: () => import('./edit-pass/edit-pass.module').then( m => m.EditPassPageModule),
    canActivate: [NoIngresarGuard]
  },
  {
    path: 'apis',
    loadChildren: () => import('./apis/apis.module').then( m => m.ApisPageModule)
  },  {
    path: 'menu2',
    loadChildren: () => import('./menu2/menu2.module').then( m => m.Menu2PageModule)
  },
  {
    path: 'formd',
    loadChildren: () => import('./formd/formd.module').then( m => m.FormdPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
