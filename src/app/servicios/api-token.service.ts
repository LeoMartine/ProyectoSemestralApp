import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiTokenService {

  apiBase = 'https://emprende.asistenciataller.cl/API/v2/';

  constructor(private http: HttpClient) { }

  getObtUsuario(): Observable<any>
  {
    return this.http.get(this.apiBase+"usuarios/1000300180").pipe();
  }

  postCrear(datos)
  {
    return this.http.post(this.apiBase+'crearUsuario', datos).pipe();
  }

  postLogin(datos)
  {
    return this.http.post(this.apiBase+'loginUsuario', datos).pipe();
  }
  
  postModificar(datos)
  {
    return this.http.post(this.apiBase+'modificarPassword', datos).pipe();
  }
}
