import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Ingrediente} from '../models/Ingrediente';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IngredienteService {
  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

    getListaIngrediente(){
      return this.http.get<Ingrediente[]>(`${this.API_URI}/ingrediente`);
    }

    saveIngrediente(ingrediente: Ingrediente){
      return this.http.post(`${this.API_URI}/ingrediente`, ingrediente);
    }

    deleteIngrediente(id: string){
      return this.http.delete(`${this.API_URI}/ingrediente/${id}`);
    }


    updateIngrediente(id:string|number, updateIngrediente: Ingrediente): Observable<Ingrediente>{
      return this.http.put(`${this.API_URI}/ingrediente/${id}`, updateIngrediente);
    }
}
