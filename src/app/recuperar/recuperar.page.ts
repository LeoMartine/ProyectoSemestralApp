import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  recupe: FormGroup;
  constructor(private router: Router, public fb: FormBuilder,
    public alertController: AlertController) {
      this.recupe = this.fb.group({
        'nombre': new FormControl("",Validators.required),
        'correo': new FormControl("",Validators.required)
      });
    }

  ngOnInit() {
  }

  async mostrar()
  {
    var mos = this.recupe.value;
    var usuario = JSON.parse(localStorage.getItem('usuario'));
    if(usuario.nombre == mos.nombre && usuario.correo == mos.correo)
    {
      const alert = await this.alertController.create({
        message: 'Estimado '+usuario.nombre+' se ha enviado su contraseña al correo',
        buttons: ['Aceptar']
      })
      await alert.present();
      this.router.navigateByUrl('menu');
    }
    else
    {
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos.',
        buttons: ['Aceptar']
      })
      await alert.present();
    }
  }
}
