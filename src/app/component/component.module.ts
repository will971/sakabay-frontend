import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUtilisateurComponent } from './login-utilisateur/login-utilisateur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { RegisterUtilisateurComponent } from './register-utilisateur/register-utilisateur.component';



@NgModule({
  declarations: [
    LoginUtilisateurComponent,
    RegisterUtilisateurComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    LoginUtilisateurComponent,
    RegisterUtilisateurComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ComponentModule { }
