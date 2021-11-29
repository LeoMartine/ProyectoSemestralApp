import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

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

  postConfirmarAsistencia(asistencia) {
    return this.http.post(this.apiBase + 'enviarCorreoAsistencia', asistencia).pipe();
  }
}
