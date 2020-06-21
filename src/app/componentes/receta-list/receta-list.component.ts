import { Component, OnInit } from '@angular/core';

import {RecetaService} from '../../services/receta.service';
import {PasoService} from '../../services/paso.service';
import {IngredienteRecetaService} from '../../services/ingrediente-receta.service'

@Component({
  selector: 'app-receta-list',
  templateUrl: './receta-list.component.html',
  styleUrls: ['./receta-list.component.css']
})
export class RecetaListComponent implements OnInit {

  recetas: any = [];
  constructor(private recetaService: RecetaService, private pasosService: PasoService, private ingredienteRecetaService: IngredienteRecetaService) { }

  ngOnInit() {
    this.getRecetas();
  }

  getRecetas(){
    this.recetaService.getListaReceta().subscribe(
      res => {
        this.recetas = res;
      },
      err => console.error(err)
    );
  }

  borrarReceta(id: string){
    this.pasosService.deletePasoReceta(id).subscribe(
      res =>{
        console.log(res);
      },
      err => console.log(err)
    );
    this.ingredienteRecetaService.deleteIngredienteReceta(id).subscribe(
      res =>{
        console.log(res);
      },
      err => console.log(err)
    );
    this.recetaService.deleteReceta(id).subscribe(
      res =>{
        console.log(res);
        this.getRecetas();
      },
      err => console.log(err)
    );
  }


}
