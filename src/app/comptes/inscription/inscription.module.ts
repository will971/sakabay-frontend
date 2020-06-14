import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriptionRoutingModule } from './inscription-routing.module';
import { InscriptionUtilisateurComponent } from './inscription-utilisateur/inscription-utilisateur.component';


@NgModule({
  declarations: [InscriptionUtilisateurComponent],
  imports: [
    CommonModule,
    InscriptionRoutingModule
  ]
})
export class InscriptionModule { }
