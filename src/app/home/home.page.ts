import { Component } from '@angular/core';
import { ApiTokenService } from '../servicios/api-token.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private api: ApiTokenService) {}

  ObtUsuario()
  {
    this.api.getObtUsuario().subscribe((resultado)=>{
      console.log(resultado);
    })
  }
}
