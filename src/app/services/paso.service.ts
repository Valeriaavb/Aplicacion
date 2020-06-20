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
  

}
