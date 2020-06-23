import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"inscription", loadChildren: () => import('./inscription/inscription.module').then((mod) => mod.InscriptionModule)},
  {path:"connexion", loadChildren: () => import('./connexion/connexion.module').then((mod) => mod.ConnexionModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComptesRoutingModule { }
