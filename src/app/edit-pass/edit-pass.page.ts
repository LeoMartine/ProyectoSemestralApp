import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-pass',
  templateUrl: './edit-pass.page.html',
  styleUrls: ['./edit-pass.page.scss'],
})
export class EditPassPage implements OnInit {

  showPassword= false;
  passwordToggleIcon = 'eye';
  editar: FormGroup;
  usuar: any = {
    usser: ''
  };
  usser1: any;
  constructor(private router: Router, public fb: FormBuilder,
    public alertController: AlertController,
    private activateRoute: ActivatedRoute,
    public toastController: ToastController) 
    {
      this.activateRoute.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          let data = this.router.getCurrentNavigation().extras.state.usuar1;
          this.usser1 = data.usser1;
          console.log('bienvenido: ' + data.usser1);
        }});
      this.editar = this.fb.group(
        {
          'nombre': new FormControl("", Validators.required),
          'correo': new FormControl("", Validators.required),
          'password': new FormControl("", Validators.required),
          'conPassword': new FormControl("", Validators.required)
        });
    }
  ngOnInit() {
  }
  
  async edit(){
    var reg = this.editar.value;
    if(this.editar.invalid){
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
      password: reg.password,
      correo: reg.correo
    }
    localStorage.setItem(reg.nombre, JSON.stringify(usuario));
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