import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './comptes/connexion/connexion/connexion.component';
import { InscriptionComponent } from './comptes/inscription/inscription/inscription.component';


const routes: Routes = [
  {path:"comptes", loadChildren: () => import('./comptes/comptes.module').then((mod) => mod.ComptesModule)},
  {path:"login", component:ConnexionComponent},
  {path:"signup", component:InscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
