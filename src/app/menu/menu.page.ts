import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiTokenService } from '../servicios/api-token.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

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

  async logout()
  {
    localStorage.removeItem('ingresado');
    localStorage.removeItem('login');
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
