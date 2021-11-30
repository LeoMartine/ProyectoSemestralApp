import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormdPageRoutingModule } from './formd-routing.module';

import { FormdPage } from './formd.page';
//import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    //BarcodeScanner,
    FormdPageRoutingModule
  ],
  declarations: [FormdPage]
})
export class FormdPageModule {}
