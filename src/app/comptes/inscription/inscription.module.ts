import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriptionRoutingModule } from './inscription-routing.module';
import { InscriptionUtilisateurComponent } from './inscription-utilisateur/inscription-utilisateur.component';
import { InscriptionPrestataireComponent } from './inscription-prestataire/inscription-prestataire.component';
import { InscriptionComponent } from './inscription/inscription.component';


@NgModule({
  declarations: [InscriptionUtilisateurComponent, InscriptionPrestataireComponent, InscriptionComponent],
  imports: [
    CommonModule,
    InscriptionRoutingModule
  ],
  exports:[
    InscriptionComponent
  ]
})
export class InscriptionModule { }
