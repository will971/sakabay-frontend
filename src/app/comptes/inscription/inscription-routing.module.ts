import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscriptionUtilisateurComponent } from './inscription-utilisateur/inscription-utilisateur.component';

const routes: Routes = [
  { path: "utilisateur", component: InscriptionUtilisateurComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscriptionRoutingModule { }
