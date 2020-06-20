import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecetaListComponent} from './componentes/receta-list/receta-list.component'
import {RecetaFormComponent} from './componentes/receta-form/receta-form.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/recetas',
    pathMatch: 'full'
  },
  {
    path: 'recetas',
    component:  RecetaListComponent
  },
  {
    path: 'receta/agregar',
    component: RecetaFormComponent
  },
  {
    path: 'receta/editar/:id',
    component: RecetaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
