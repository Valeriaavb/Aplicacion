import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getDirectivesAtNodeIndex } from '@angular/core/src/render3/context_discovery';
import {Receta} from '../models/Receta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

    getListaReceta(){
      return this.http.get(`${this.API_URI}/recetas`);
    }

    getReceta(id: string){
      return this.http.get(`${this.API_URI}/recetas/${id}`);
    }

    saveReceta(receta: Receta){
      return this.http.post(`${this.API_URI}/recetas`, receta);
    }

    deleteReceta(id: string){
      return this.http.delete(`${this.API_URI}/recetas/${id}`);
    }

    updateReceta(id:string|number, updateReceta: Receta): Observable<Receta>{
      return this.http.put(`${this.API_URI}/recetas/${id}`, updateReceta);
    }
   
}
