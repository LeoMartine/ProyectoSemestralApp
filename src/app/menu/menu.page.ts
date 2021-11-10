import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  usser: any;
  constructor(public alertController: AlertController, private router: Router, private activateRoute: ActivatedRoute,
    public toastController: ToastController) {
    this.activateRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        let data = this.router.getCurrentNavigation().extras.state.usuar;
        this.usser = data.usser;
        console.log('bienvenido: ' + data.usser);
      }
  });
   }

  ngOnInit() {
  }

  async logout()
  {
    var ingre = {
      ingreso: 'false'
    }
    localStorage.setItem('ingresado', JSON.stringify(ingre));
    const alert = await this.alertController.create({
      header: 'Cerrando Sesion',
      message: 'Adiosin.',
      buttons: ['Aceptar']
    })
    await alert.present();
    this.router.navigate(['/home']);
  }
}
