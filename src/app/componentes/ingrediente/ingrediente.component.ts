import { Component, OnInit } from '@angular/core';
import {IngredienteService} from '../../services/ingrediente.service'
import {IngredienteRecetaService} from '../../services/ingrediente-receta.service'
import { Ingrediente } from 'src/app/models/Ingrediente';

@Component({
  selector: 'app-ingrediente',
  templateUrl: './ingrediente.component.html',
  styleUrls: ['./ingrediente.component.css']
})
export class IngredienteComponent implements OnInit {

  ingredientes: any=[];


  constructor(private ingredienteService: IngredienteService,private ingredienteRecetaService: IngredienteRecetaService) { }

  ngOnInit() {
    this.getIngredientes();
  }

  getIngredientes(){
    this.ingredienteService.getListaIngrediente().subscribe(
      res => {
        
        this.ingredientes = res;
        this.ingredientes.forEach(element => {
          element.editar = true;
        });
        
      },
      err => console.error(err)
    );
  }
  agregarIngrediente(){
    let ingrediente: Ingrediente = {
      id_ingrediente: 0,
      nombre: '',
      editar: false,
      nuevo: true,
    };
    this.ingredientes.push(ingrediente);
  }
  borrarIngrediente(id: string){
    this.ingredienteRecetaService.deleteIngredienteRec(id).subscribe(
      res =>{
        
        this.ingredienteService.deleteIngrediente(id).subscribe(
          res =>{
            
            this.getIngredientes();
          },
          err => console.error(err)
        );
      },
      err => console.error(err)
    );
  }

  editarIngrediente(i: number){
    this.ingredientes[i].editar=false;
  }

  guardarIngrediente(i:number){
    delete this.ingredientes[i].editar;
    if(this.ingredientes[i].nuevo){
      delete this.ingredientes[i].nuevo;
      this.ingredienteService.saveIngrediente(this.ingredientes[i]).subscribe(
        res =>{
          
        },
        err => console.error(err)
      );
    }else{
    this.ingredienteService.updateIngrediente(this.ingredientes[i].id_ingrediente, this.ingredientes[i]).subscribe(
      res =>{
        
      },
      err => console.error(err)
    ); 
    }
    this.ingredientes[i].editar = true;
  }

}
