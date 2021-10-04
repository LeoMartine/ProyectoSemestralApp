import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{
  showPassword= false;
  passwordToggleIcon = 'eye';
  ingreso: FormGroup;
  constructor(private router: Router, public fb: FormBuilder,
    public alertController: AlertController) { 
      this.ingreso = this.fb.group({
        'nombre': new FormControl("",Validators.required),
        'password': new FormControl("",Validators.required)
      });
    }
  
  ngOnInit() {
  }

  async ingresar()
  {
    var ing = this.ingreso.value;
    var usuario = JSON.parse(localStorage.getItem('usuario'));
    if(usuario.nombre == ing.nombre && usuario.password == ing.password)
    {
      const alert = await this.alertController.create({
        header: 'Datos correctos',
        message: 'Bienvenido '+ usuario.nombre,
        buttons: ['Aceptar']
      })
      await alert.present();
      this.router.navigateByUrl('menu');
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos.',
        buttons: ['Aceptar']
      })
      await alert.present();
    }
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
