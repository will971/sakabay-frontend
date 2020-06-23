import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionUtilisateurComponent } from './connexion-utilisateur/connexion-utilisateur.component';
import { ConnexionPrestataireComponent } from './connexion-prestataire/connexion-prestataire.component';


const routes: Routes = [
  { path: "utilisateur", component: ConnexionUtilisateurComponent },
  { path: "prestataire", component: ConnexionPrestataireComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnexionRoutingModule { }
