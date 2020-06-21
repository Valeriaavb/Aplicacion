import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecetaFormComponent } from './componentes/receta-form/receta-form.component';
import { RecetaListComponent } from './componentes/receta-list/receta-list.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';

import { RecetaService} from './services/receta.service';
import { RecetaComponent } from './componentes/receta/receta.component';
import { IngredienteComponent } from './componentes/ingrediente/ingrediente.component'
@NgModule({
  declarations: [
    AppComponent,
    RecetaFormComponent,
    RecetaListComponent,
    NavegacionComponent,
    RecetaComponent,
    IngredienteComponent
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
