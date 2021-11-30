import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormdPageRoutingModule } from './formd-routing.module';

import { FormdPage } from './formd.page';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NgxQRCodeModule,
    FormdPageRoutingModule
  ],
  declarations: [FormdPage]
})
export class FormdPageModule {}
