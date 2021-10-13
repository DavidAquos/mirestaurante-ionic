import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Restaurante} from "../common/restaurante";

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {
  // Definimos la URL de la API
  private baseURL = 'http://localhost:3000/api/restaurantes';

  // Inyectamos el cliente http para poder hacer peticiones Http
  // a la API

  constructor(private http: HttpClient) { }

  // Creamos la funcion que nos devolverá los el array de restaurantes
  getRestauranteList(): Observable<Restaurante[]> {
    return this.http.get<Restaurante[]>(this.baseURL);
  }
}
