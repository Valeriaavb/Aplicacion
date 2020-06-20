import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RecetaFormComponent } from './componentes/receta-form/receta-form.component';
import { RecetaListComponent } from './componentes/receta-list/receta-list.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
