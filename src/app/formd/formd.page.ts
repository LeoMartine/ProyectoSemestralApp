import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiTokenService } from '../servicios/api-token.service';

@Component({
  selector: 'app-formd',
  templateUrl: './formd.page.html',
  styleUrls: ['./formd.page.scss'],
})
export class FormdPage implements OnInit {

  usser: any;
  s: any;
  registroC: FormGroup;
  crearCod: null;
  qrData1: null;
  qrData2: null;
  constructor(public alertController: AlertController, private router: Router, private activateRoute: ActivatedRoute,
    public toastController: ToastController, public fb: FormBuilder, public api: ApiTokenService) {
      var i = JSON.parse(localStorage.getItem('login'));
      var s = i.nombre;
      this.s = s;
      console.log('Creando Clases: ' + this.s);
      this.registroC = this.fb.group(
        {
          'clase': new FormControl("", Validators.required),
          'fecha': new FormControl(),
          'horaI': new FormControl("", Validators.required),
          'horaT': new FormControl("", Validators.required)
        });
   }

  ngOnInit() {
  }

  public async guardar()
  {
    var reg = this.registroC.value;
    var i = JSON.parse(localStorage.getItem('login'));
    if(this.registroC.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Tienes que validar todos los datos ingresados',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }
    var clase = {
      nombre: reg.clase,
      horaI: reg.horaI,
      horaT: reg.horaT,
      docente: i.nombre
    }
    localStorage.setItem(reg.clase, JSON.stringify(clase));
    const alert = await this.alertController.create({
      header: 'Clase Creada',
      buttons: ['Aceptar']
    })
    await alert.present();
    this.crearCod = this.qrData1;
  }
}
