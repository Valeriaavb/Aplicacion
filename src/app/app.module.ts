import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RecetaFormComponent } from './componentes/receta-form/receta-form.component';
import { RecetaListComponent } from './componentes/receta-list/receta-list.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';

import { RecetaService} from './services/receta.service'
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RecetaFormComponent,
    RecetaListComponent,
    NavegacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RecetaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
