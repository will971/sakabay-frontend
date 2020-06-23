import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnexionRoutingModule } from './connexion-routing.module';
import { ConnexionPrestataireComponent } from './connexion-prestataire/connexion-prestataire.component';
import { ConnexionUtilisateurComponent } from './connexion-utilisateur/connexion-utilisateur.component';
import { ConnexionComponent } from './connexion/connexion.component';


@NgModule({
  declarations: [ConnexionPrestataireComponent, ConnexionUtilisateurComponent, ConnexionComponent],
  imports: [
    CommonModule,
    ConnexionRoutingModule
  ],
  exports:[
    ConnexionComponent
  ]
})
export class ConnexionModule { }
