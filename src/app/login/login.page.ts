import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApiTokenService } from '../servicios/api-token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{
  showPassword= false;
  passwordToggleIcon = 'eye';
  ingreso: FormGroup;
  usuar: any = {
    usser: '',
    pass:''
  };
  constructor(private router: Router, public fb: FormBuilder,
    public alertController: AlertController, private api: ApiTokenService) { 
      this.ingreso = this.fb.group({
        'nombre': new FormControl("",Validators.pattern("[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})")),
        'password': new FormControl("",Validators.required)
      });
    }
  
  ngOnInit() {
  }

  async ingresar() //Login basado en LocalStorage
  {
    var ing = this.ingreso.value;
    var usuario = JSON.parse(localStorage.getItem(ing.nombre));
    if(this.ingreso.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }
    if(usuario.correo == ing.nombre && usuario.password == ing.password)
    {
      const alert = await this.alertController.create({
        header: 'Datos correctos',
        message: 'Bienvenido '+ usuario.nombre,
        buttons: ['Aceptar']
      })
      await alert.present();
      let navigationExtras: NavigationExtras = {
        state: {
          usuar: this.usuar
        }
      };
      var ingre = {
        ingreso: 'true'
      }
      localStorage.setItem('ingresado', JSON.stringify(ingre));
      //this.api.postLogin({"correo": ing.nombre,"password": ing.password,"token_equipo": 1000300180}).subscribe((res)=>{
        //console.log(res);
      //})
      this.router.navigate(['/menu'], navigationExtras);
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos.',
        buttons: ['Aceptar']
      })
      await alert.present();
    }
  }

  ingresar2() //Login basado en API
  {
    var ing = this.ingreso.value;
    var login = {
      "correo": ing.nombre,
      "password": ing.password,
      "token_equipo": 1000300180
    }
    this.api.postLogin(login).subscribe(async(resultado)=>
      {
        console.log(resultado);
        var result = JSON.stringify(resultado);
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
            message: 'Bienvenido a la Plataforma',
            buttons: ['Aceptar']
          })
          await alert.present();
          let navigationExtras: NavigationExtras = {
            state: {
              usuar: this.usuar
            }
          };
          var ingre = {
            ingreso: 'true'
          }
          localStorage.setItem('ingresado', JSON.stringify(ingre));
          localStorage.setItem('login', JSON.stringify(resp.result[0]));
          this.router.navigate(['/menu'], navigationExtras);
        }
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