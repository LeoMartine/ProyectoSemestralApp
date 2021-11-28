import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoIngresarGuard implements CanActivate {

  constructor (private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('ingresado'))
      {
        this.router.navigate(['/menu']);
        return false;
      }
      else
      {
        if(localStorage.getItem('ingresadoA'))
        {
          this.router.navigate(['/menu2']);
          return false;
        }
        else
        {
          return true;
        }
      }
  }
  
}
