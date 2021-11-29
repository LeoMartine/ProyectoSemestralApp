import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiTokenService } from '../servicios/api-token.service';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.page.html',
  styleUrls: ['./menu2.page.scss'],
})
export class Menu2Page implements OnInit {

  public hora:number = 0;
  public dia:number = 0;
  public minutos:number = 0;
  public segundos:number = 0;
  public contador:any;

  usser: any;
  s: any;
  constructor(public alertController: AlertController, private router: Router, private activateRoute: ActivatedRoute,
    public toastController: ToastController, public api: ApiTokenService) {
    this.activateRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        //let data = this.router.getCurrentNavigation().extras.state.usuar;
        //this.usser = data.usser;
        var i = JSON.parse(localStorage.getItem('login'));
        var s = i.nombre;
        this.s = s;
        console.log('bienvenido: ' + this.s);
      }
  });
   }

  ngOnInit() {
  }

  start()
  {
    if(this.contador == undefined)
    {
      this.contador = setInterval( ()=>
      {
        this.segundos +=0.25;
        if(this.segundos == 60)
        {
          this.segundos = 0;
          this.minutos +=1;
          if(this.minutos == 60)
          {
            this.minutos = 0;
            this.hora +=1;
            if(this.hora == 24)
            {
              this.hora = 0;
              this.dia += 1;
              if(this.dia == 30)
              {
                this.dia = 0;
              }
            }
          }
        }
      })
    }
  }

  stop()
  {
    localStorage.setItem('tiempo', this.dia+':'+this.hora+':'+this.minutos);
    clearInterval(this.contador);
    this.dia = 0;
    this.hora = 0;
    this.minutos = 0;
    this.segundos = 0;
    this.contador = null;
  }
  async logout()
  {
    localStorage.removeItem('ingresadoA');
    localStorage.removeItem('login');
    localStorage.removeItem('tiempo');
    const alert = await this.alertController.create({
      header: 'Cerrando Sesion',
      message: 'Adiosin.',
      buttons: ['Aceptar']
    })
    await alert.present();
    console.log('Adiosin');
    this.router.navigate(['/home']);
  }

}
