import { Timestamp } from 'rxjs';

export interface Receta{
    id_receta?: number;
    nombre?: string;
    fecha_creacion?:  Date;
    imagen?: string;
    descripcion?: string;

}