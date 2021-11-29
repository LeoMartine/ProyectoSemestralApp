import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Menu2PageRoutingModule } from './menu2-routing.module';

import { Menu2Page } from './menu2.page';
//import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    //BarcodeScanner,
    Menu2PageRoutingModule
  ],
  declarations: [Menu2Page]
})
export class Menu2PageModule {}
