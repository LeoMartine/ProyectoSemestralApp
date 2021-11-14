import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiTokenService } from '../servicios/api-token.service';


@Component({
  selector: 'app-apis',
  templateUrl: './apis.page.html',
  styleUrls: ['./apis.page.scss'],
})
export class ApisPage implements OnInit {

  constructor(private router: Router,
    public alertController: AlertController, private api: ApiTokenService) {}

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

  logMiUsuario()
  {
    this.api.postLogin(
      {
        "correo": "se.vidall@profesor.duoc.cl","password": "09876","token_equipo": 1000300180
      }).subscribe(async(res)=>
      {
        console.log(res); 
        var result = JSON.stringify(res);
        var resp = JSON.parse(result);
        if(resp.result === 'Login incorrecto')
        {
          const alert = await this.alertController.create({
            header: 'Datos incorrectos',
            message: 'Los datos que ingresaste son incorrectos.',
            buttons: ['Aceptar']
          })
          await alert.present();
        }
        else
        {
          const alert = await this.alertController.create({
            header: 'Datos correctos',
            message: 'Bienvenido ',
            buttons: ['Aceptar']
          })
          var ingre = {
            ingreso: 'true'
          }
          localStorage.setItem('ingresado', JSON.stringify(ingre));
          this.router.navigate(['/menu']);   
        }
      })
  }

  modMiUsuario()
  {
    this.api.postModificar({"correo": "se.vidall@profesor.duoc.cl","nueva_password": "21312","token_equipo": 1000300180}).subscribe((res)=>{
      console.log(res);
    })
  }
}
