import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './comptes/connexion/connexion/connexion.component';


const routes: Routes = [
  {path:"comptes", loadChildren: () => import('./comptes/comptes.module').then((mod) => mod.ComptesModule)},
  {path:"login", component:ConnexionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
