import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriptionRoutingModule } from './inscription-routing.module';
import { InscriptionUtilisateurComponent } from './inscription-utilisateur/inscription-utilisateur.component';
import { InscriptionPrestataireComponent } from './inscription-prestataire/inscription-prestataire.component';


@NgModule({
  declarations: [InscriptionUtilisateurComponent, InscriptionPrestataireComponent],
  imports: [
    CommonModule,
    InscriptionRoutingModule
  ]
})
export class InscriptionModule { }
