import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscriptionUtilisateurComponent } from './inscription-utilisateur/inscription-utilisateur.component';
import { InscriptionPrestataireComponent } from './inscription-prestataire/inscription-prestataire.component';

const routes: Routes = [
  { path: "utilisateur", component: InscriptionUtilisateurComponent },
  { path: "prestataire", component: InscriptionPrestataireComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscriptionRoutingModule { }
