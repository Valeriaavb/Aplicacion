import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecetaListComponent} from './componentes/receta-list/receta-list.component'
const routes: Routes = [
  {
    path: '',
    redirectTo: '/receta',
    pathMatch: 'full'
  },
  {
    path: 'receta',
    component:  RecetaListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
