import { Component, OnInit } from '@angular/core';
import { Receta } from 'src/app/models/Receta';
import {ActivatedRoute, Router} from '@angular/router';
import {PasoService} from '../../services/paso.service';
import {RecetaService} from '../../services/receta.service';
import {IngredienteRecetaService} from '../../services/ingrediente-receta.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {

  receta: Receta = {
    id_receta: 0,
    nombre: '',
    imagen: '',
    fecha_creacion: new Date()
   };

  pasos: any = [];
  ingredientes: any = [];
  constructor(private recetaService: RecetaService,private pasoService: PasoService,private ingredienteRecetaService: IngredienteRecetaService,private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;

    if (params.id){
      this.recetaService.getReceta(params.id)
      .subscribe(
        res =>{
          this.receta=res;
        },
        err => console.error(err)
      );

      this.pasoService.getListaPasos(params.id)
      .subscribe(
        res =>{
          this.pasos=res;
        },
        err => console.error(err)
      );
      this.ingredienteRecetaService.getListaIngRec(params.id)
      .subscribe(
        res =>{
          this.ingredientes=res;
        },
        err => console.error(err)
      );
    }
    
  }

}
