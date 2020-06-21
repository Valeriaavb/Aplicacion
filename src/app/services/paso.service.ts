import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getDirectivesAtNodeIndex } from '@angular/core/src/render3/context_discovery';
import {Pasos} from '../models/Pasos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasoService {
  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}
  
  getListaPasos(id: string) {
    return this.http.get(`${this.API_URI}/pasos/${id}`,);
  }


  savePaso(paso: Pasos){
    return this.http.post(`${this.API_URI}/pasos`, paso);
  }

  deletePaso(id: string){
    return this.http.delete(`${this.API_URI}/pasos/${id}`);
  }

  deletePasoReceta(id: string){
    return this.http.delete(`${this.API_URI}/pasos/receta/${id}`);
  }

  updatePaso(id:string|number, updatePaso: Pasos): Observable<Pasos>{
    return this.http.put(`${this.API_URI}/pasos/${id}`, updatePaso);
  }

}
