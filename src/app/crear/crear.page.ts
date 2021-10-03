import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})

export class CrearPage implements OnInit{

  showPassword= false;
  passwordToggleIcon = 'eye';
  registro: FormGroup;
  constructor(private router: Router, public fb: FormBuilder,
    public alertController: AlertController) 
    {
      this.registro = this.fb.group(
        {
          'nombre': new FormControl("", Validators.required),
          'password': new FormControl("", Validators.required),
          'conPassword': new FormControl("", Validators.required)
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
      password: reg.password
    }
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.router.navigateByUrl('menu');
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
