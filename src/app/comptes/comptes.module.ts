import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComptesRoutingModule } from './comptes-routing.module';
import { InscriptionModule } from './inscription/inscription.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComptesRoutingModule,
    InscriptionModule
  ]
})
export class ComptesModule { }
