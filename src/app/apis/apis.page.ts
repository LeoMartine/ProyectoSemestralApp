import { Component, OnInit } from '@angular/core';
import { ApiTokenService } from '../servicios/api-token.service';


@Component({
  selector: 'app-apis',
  templateUrl: './apis.page.html',
  styleUrls: ['./apis.page.scss'],
})
export class ApisPage implements OnInit {

  constructor(private api: ApiTokenService) {}

  ngOnInit() {
  }

  ObtUsuario()
  {
    this.api.getObtUsuario().subscribe((resultado)=>{
      console.log(resultado);
    })
  }

  crearMiUsuario()
  { 
    this.api.postCrear({"nombre": "test","apellidos": "apellido","correo": "test@profesor.duoc.cl","password": "1234","token_equipo": 1000300180}).subscribe((res)=>{
      console.log(res);
    })
  }

  modMiUsuario()
  {
    this.api.postModificar({"correo": "se.vidall@profesor.duoc.cl","nueva_password": "21312","token_equipo": 1000300180}).subscribe((res)=>{
      console.log(res);
    })
  }
}
