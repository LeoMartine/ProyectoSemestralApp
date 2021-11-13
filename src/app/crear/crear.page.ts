import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApiTokenService } from '../servicios/api-token.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})

export class CrearPage implements OnInit{

  showPassword= false;
  passwordToggleIcon = 'eye';
  registro: FormGroup;
  usuar: any = {
    usser: ''
  };
  constructor(private router: Router, public fb: FormBuilder,
    public alertController: AlertController, private api: ApiTokenService) 
    {
      this.registro = this.fb.group(
        {
          'nombre': new FormControl("", Validators.required),
          'apellidos': new FormControl("", Validators.required),
          'password': new FormControl("", Validators.required),
          'correo': new FormControl("", Validators.required)
        });
    }

  ngOnInit() {
  }


  async guardar(){
    var reg = this.registro.value;
    if(this.registro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }
    var usuario = {
      nombre: reg.nombre,
      apellidos: reg.apellidos,
      password: reg.password,
      correo: reg.correo,
      token_equipos: '1000300180'
    }
    var ingre = {
      ingreso: 'true'
    }
    localStorage.setItem(reg.correo, JSON.stringify(usuario));
    localStorage.setItem('ingresado', JSON.stringify(ingre));
    this.api.postCrear({"nombre": reg.nombre,"apellidos": reg.apellidos,"correo": reg.correo,"password": reg.password,"token_equipo": 1000300180}).subscribe((res)=>{
      console.log(res);
    })
    let navigationExtras: NavigationExtras = {
      state: {
        usuar: this.usuar
      }
    };
    const alert = await this.alertController.create({
      header: 'Datos correctos',
      message: 'Bienvenido '+ usuario.nombre,
      buttons: ['Aceptar']
    })
    await alert.present();
    this.router.navigate(['/menu'], navigationExtras);
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
