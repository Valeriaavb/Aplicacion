import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredienteRecetaService {

  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}
/*
    getListaReceta(){
      return this.http.get(`${this.API_URI}/recetas`);
    }

    getReceta(id: string){
      return this.http.get(`${this.API_URI}/recetas/${id}`);
    }

    saveReceta(receta: Receta){
      return this.http.post(`${this.API_URI}/recetas`, receta);
    }
     updateReceta(id:string|number, updateReceta: Receta): Observable<Receta>{
      return this.http.put(`${this.API_URI}/recetas/${id}`, updateReceta);
    }
   
    */

    deleteIngredienteReceta(id: string){
      return this.http.delete(`${this.API_URI}/ingredienteReceta/${id}`);
    }


   
}
