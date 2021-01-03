import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUtilisateurComponent } from './login-utilisateur/login-utilisateur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPrestataireComponent } from './login-prestataire/login-prestataire.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginUtilisateurComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    LoginUtilisateurComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ComponentModule { }
