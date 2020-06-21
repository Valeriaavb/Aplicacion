import { Component, OnInit } from '@angular/core';
import { Receta } from 'src/app/models/Receta';
import {ActivatedRoute, Router} from '@angular/router';
import {RecetaService} from '../../services/receta.service';
import {Pasos} from '../../models/Pasos';
import {IngredienteReceta} from '../../models/IngredienteReceta';
import {PasoService} from '../../services/paso.service';
import {IngredienteService} from '../../services/ingrediente.service';
import {IngredienteRecetaService} from '../../services/ingrediente-receta.service';
import { Ingrediente } from 'src/app/models/Ingrediente';

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

  ingrediente: Ingrediente[] = [];
  ingredientes: IngredienteReceta[] = [];
  pasos: Pasos[] = [];
  pasosold: Pasos[] = [];
  edit: boolean =false;

  constructor(private recetaService: RecetaService,private pasoService: PasoService, private router: Router, private activedRoute: ActivatedRoute, private ingredienteService: IngredienteService, private ingredienteRecetaService: IngredienteRecetaService) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;

    if (params.id) {
      this.recetaService.getReceta(params.id).subscribe(
        (res) => {
          this.receta = res;
          this.edit = true;
        },
        (err) => console.error(err)
      );

      this.pasoService.getListaPasos(params.id).subscribe(
        (res) => {
          this.pasos=res;
          this.pasosold=res;
          this.edit = true;
        },
        (err) => console.error(err)
      );

      this.ingredienteRecetaService.getListaIngRec(params.id).subscribe(
        (res) => {
          this.ingredientes=res;
          this.edit = true;
        },
        (err) => console.error(err)
      );

      this.ingredienteService.getListaIngrediente().subscribe(
        (res) => {
          debugger;
          this.ingrediente=res;
          this.edit = true;
        },
        (err) => console.error(err)
      );
    }else{
      this.ingredienteService.getListaIngrediente().subscribe(
        (res) => {
          debugger;
          this.ingrediente=res;
        },
        (err) => console.error(err)
      );
    }
  }

  agregarNuevosPasos(){
    let paso: Pasos = {
      id_receta: 0,
      descripcion: '',
      imagen: '',
      numero_paso: 0
    };
    this.pasos.push(paso);

    for (let i = 0; i < this.pasos.length; i++) {
      this.pasos[i].numero_paso= i+1;
      this.pasos[i].id_receta = this.receta.id_receta;     
    }
    console.log(this.pasos);
  
  }

  guardarReceta(){
    delete this.receta.id_receta;
    delete this.receta.fecha_creacion;
    delete this.receta.fecha_modificacion;
    this.recetaService.saveReceta(this.receta)
      .subscribe(
        res =>{
          console.log(res.insertId);
          for (let i = 0; i < this.pasos.length; i++) {
            this.pasos[i].id_receta = res.insertId;   
            this.pasoService.savePaso(this.pasos[i]).subscribe(
              res=>{
                console.log(res);
              },
              err => console.error(err)
            );  
          }
            for (let j = 0; j < this.ingredientes.length; j++) {
              debugger;
              this.ingredientes[j].id_receta = res.insertId; 
              delete this.ingredientes[j].nombre;
              delete this.ingredientes[j].nuevo;
              delete this.ingredientes[j].id;
              this.ingredienteRecetaService.saveIngRec(this.ingredientes[j]).subscribe(
                res=>{
                  console.log(res);
                },
                err => console.error(err)
              );  
          }
          this.router.navigate(['/recetas']);
         },
        err => console.error(err)
      );
  }

  editarReceta(){
    delete this.receta.fecha_creacion;
    this.pasos;
    this.receta;
    debugger;
    //this.receta.fecha_modificacion= new Date();
    this.recetaService.updateReceta(this.receta.id_receta,this.receta)
      .subscribe(
        res =>{
          this.router.navigate(['/recetas']);
         },
        err => console.error(err)
      );
        
    this.pasoService.deletePasoReceta(this.pasos[0].id_receta).subscribe(
      res=>{
        console.log('borre todo');
        this.pasos.forEach((paso)=>{
          this.pasoService.savePaso(paso).subscribe(
            res=>{
              console.log('Inserto nuevos pasos');
            },
            err => console.error(err)
          );
        })
      },
      err => console.error(err)
    );    
      this.ingredienteRecetaService.deleteIngredienteReceta(this.ingredientes[0].id_receta).subscribe(
        (res)=>{
          this.ingredientes.forEach((ingredien)=>{
            delete ingredien.nombre;
            delete ingredien.nuevo;
            delete ingredien.id;
            this.ingredienteRecetaService.saveIngRec(ingredien).subscribe(
              res=>{
                console.log('Inserto nuevo ingRec');
              },
              err => console.error(err)
            );
          })
        },
        err=> console.log(err)
      );
  }

  borrarPaso(element: Pasos){
    var i = this.pasos.indexOf( element );
    this.pasos.splice( i, 1 );
    for (let i = 0; i < this.pasos.length; i++) {
      this.pasos[i].numero_paso= i+1;   
    }
    debugger;
  }

  borrarIngrediente(element){
    var i = this.ingredientes.indexOf( element );
    this.ingredientes.splice( i, 1 );
    debugger;
  }

  agregarNuevosIngredientes(){
    let ingrediente: IngredienteReceta = {
      id_receta: this.receta.id_receta,
      nombre: null,
      cantidad: null,
      id_ingrediente:null,
      nuevo:true
    };
    this.ingredientes.push(ingrediente);
    debugger;
  }
}
