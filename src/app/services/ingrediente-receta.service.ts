import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IngredienteReceta} from '../models/IngredienteReceta';

@Injectable({
  providedIn: 'root'
})
export class IngredienteRecetaService {

  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

   getListaIngRec(id: string): Observable<IngredienteReceta[]>{
    return this.http.get<IngredienteReceta[]>(`${this.API_URI}/ingredienteReceta/${id}`);
  }
   deleteIngredienteRec(id: string){
    return this.http.delete(`${this.API_URI}/ingredienteReceta/ing/${id}`);
  }

    deleteIngredienteReceta(id: string|number){
      return this.http.delete(`${this.API_URI}/ingredienteReceta/${id}`);
    }

    saveIngRec(ingrediente){
      return this.http.post(`${this.API_URI}/ingredienteReceta`, ingrediente);
    }
    updateReceta(id:string|number, updateIngRec){
      return this.http.put(`${this.API_URI}/ingredienteReceta/${id}`, updateIngRec);
    }

   
}
