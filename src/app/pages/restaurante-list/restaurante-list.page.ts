import { Component, OnInit } from '@angular/core';
import {Restaurante} from "../../common/restaurante";
import {RestauranteService} from "../../services/restaurante.service";

@Component({
  selector: 'app-restaurante-list',
  templateUrl: './restaurante-list.page.html',
  styleUrls: ['./restaurante-list.page.scss'],
})
export class RestauranteListPage implements OnInit {

  // Saco el día actual de la semana
  diaActual = new Date().getDay();

  // Creamos el array donde guardaremos los restaurantes
  // que traigamos de la API
  restaurantes: Restaurante[] = [];

  // Inyectamos el servicio para poder utilizarlo
  constructor(private restauranteService: RestauranteService) { }

  // En el ngOnInit es donde vamos a poner las funciones que
  // queremos ejecutar cuando se inicie nuestro componente
  // En nuestro caso queremos leer los restaurantes
  ngOnInit() {
    this.listRestaurantes();
  }

  // Definimos la función que carga los restaurantes del servicio
  private listRestaurantes() {
    this.restauranteService.getRestauranteList().subscribe(
      // Recogemos la respueta del servidor en una variable llamada data
      data => {
        // Guardamos la respuesta en nuestro array de restaurantes
        this.restaurantes = data;
      }
    );
  }
}
