import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApiTokenService } from '../servicios/api-token.service';


@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  showPassword= false;
  passwordToggleIcon = 'eye';
  recupe: FormGroup;
  usuar1: any = {
    mail1:''
  };
  constructor(private router: Router, public fb: FormBuilder,
    public alertController: AlertController,
    private activateRoute: ActivatedRoute, 
    private api: ApiTokenService) {
      this.recupe = this.fb.group({
        'correo': new FormControl("", Validators.pattern("[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})")),
        'password': new FormControl("",Validators.required)
      });
    }

  ngOnInit() {
  }

  async mostrar() //Cambio de Pass basado en LocalStorage
  {
    var mos = this.recupe.value;
    var usuario = JSON.parse(localStorage.getItem(mos.correo));
    if(usuario.correo == mos.correo)
    {
      const alert = await this.alertController.create({
        header: 'Datos correctos',
        message: 'Estimado '+usuario.nombre+' se redireccionara a editar la contraseña',
        buttons: ['Aceptar']
      })
      await alert.present();
      let navigationExtras: NavigationExtras = {
        state: {
          usuar1: this.usuar1
        }
      };
      this.router.navigate(['/edit-pass'], navigationExtras);
    }
    else
    {
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      })
      await alert.present();
    }
  }

  mostrar2() //Cambio de Pass basado en API
  {
    var mos = this.recupe.value;
    var recu = {
      "correo": mos.correo,
      "nueva_password": mos.password,
      "token_equipo": 1000300180
    }
    this.api.postModificar(recu).subscribe(async(resultado)=>
    {
      console.log(resultado);
      const alert = await this.alertController.create({
        header: 'Datos correctos',
        buttons: ['Aceptar']
      })
      await alert.present();
      this.router.navigate(['/login']);
    })
  }

  togglePassword():void{
    this.showPassword =!this.showPassword;
    if(this.passwordToggleIcon == 'eye')
    {
      this.passwordToggleIcon = 'eye-off';
    }
    else
    {
      this.passwordToggleIcon = 'eye';
    }
  }
}
