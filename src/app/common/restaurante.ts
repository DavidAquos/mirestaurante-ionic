import {Comentario} from "./comentario";

export class Restaurante {
  _id: string;
  nombre: string;
  imgLogo: string;
  descripcion: string;
  rangoMaxReparto: string;
  destacado: boolean;
  activo: boolean;
  localizacion: string;
  categoria: string;
  horario: [{
    dia: number;
    apertura: number;
    cierre: number;
  }];
  comentarios: Comentario[];
  platos: [
    {
      nombre: string;
      precioBase: number;
      descripcion: string;
      alergenos: string[];
      imgPlato: string;
      extra: [
        {
          nombre: string;
          coste: number;
        }
      ];
      comentarios: Comentario[];
    }
  ];
  dateCreated: Date;
  lastUpdated: Date;
}
