import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComptesRoutingModule } from './comptes-routing.module';
import { InscriptionModule } from './inscription/inscription.module';
import { ConnexionModule } from './connexion/connexion.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComptesRoutingModule,
    InscriptionModule,
    ConnexionModule
  ],
  exports:[
    ConnexionModule
  ]
})
export class ComptesModule { }
