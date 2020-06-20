import { Component, OnInit } from '@angular/core';
import { Receta } from 'src/app/models/Receta';
import {ActivatedRoute, Router} from '@angular/router';

import {RecetaService} from '../../services/receta.service'
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
    fecha_creacion: new Date(),
    fecha_modificacion: new Date()
  };
  constructor(private recetaService: RecetaService,private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;

    if (params.id){
      this.recetaService.getReceta(params.id)
      .subscribe(
        res =>{
          this.receta=res;
          console.log(this.receta.id_receta);
        },
        err => console.error(err)
      );
    }
  }

}
