import { Component, OnInit, HostBinding } from '@angular/core';
import { Receta } from 'src/app/models/Receta';
import {ActivatedRoute, Router} from '@angular/router';

import {RecetaService} from '../../services/receta.service'


@Component({
  selector: 'app-receta-form',
  templateUrl: './receta-form.component.html',
  styleUrls: ['./receta-form.component.css']
})
export class RecetaFormComponent implements OnInit {

  receta: Receta = {
    id_receta: 0,
    nombre: '',
    imagen: '',
    fecha_creacion: new Date(),
    fecha_modificacion: new Date()
  };
  
  edit: boolean =false;

  constructor(private recetaService: RecetaService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;

    if (params.id){
      this.recetaService.getReceta(params.id)
      .subscribe(
        res =>{
          this.receta=res;
          console.log(this.receta.id_receta);
          this.edit =true;
        },
        err => console.error(err)
      );
    }
  }

  guardarReceta(){
    delete this.receta.id_receta;
    delete this.receta.fecha_creacion;
    delete this.receta.fecha_modificacion;
    this.recetaService.saveReceta(this.receta)
      .subscribe(
        res =>{
          console.log(res);
          this.router.navigate(['/recetas']);
         },
        err => console.error(err)
      );
  }

  editarReceta(){
    delete this.receta.fecha_creacion;
    //this.receta.fecha_modificacion= new Date();
    this.recetaService.updateReceta(this.receta.id_receta,this.receta)
      .subscribe(
        res =>{
          this.router.navigate(['/recetas']);
         },
        err => console.error(err)
      );
  }

}
