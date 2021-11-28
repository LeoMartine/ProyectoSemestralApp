import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngresarGuard implements CanActivate {

  constructor (private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem('ingresado'))
    {
      return true;
    }
    else
    {
      if(localStorage.getItem('ingresadoA'))
      {
        return true;
      }
      else
      {
        this.router.navigate(['/login']);
        return false;
      }
    }
  }
  
}
