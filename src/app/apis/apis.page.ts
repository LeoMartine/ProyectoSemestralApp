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
}
