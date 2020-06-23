import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComptesModule } from './comptes/comptes.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PartageModule } from './partage/partage.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComptesModule,
    PartageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
