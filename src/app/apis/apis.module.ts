import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApisPageRoutingModule } from './apis-routing.module';

import { ApisPage } from './apis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApisPageRoutingModule
  ],
  declarations: [ApisPage]
})
export class ApisPageModule {}
