import { Component, OnInit } from '@angular/core';
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
  constructor(public alertController: AlertController, private router: Router, private activateRoute: ActivatedRoute,
    public toastController: ToastController, public api: ApiTokenService) {
      var i = JSON.parse(localStorage.getItem('login'));
      var s = i.nombre;
      this.s = s;
      console.log('Creando Clases: ' + this.s);
   }

  ngOnInit() {
  }


}
