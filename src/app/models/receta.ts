import { Timestamp } from 'rxjs';

export interface Receta{
    id_receta?: number;
    nombre?: string;
    fecha_creacion?:  Date;
    fecha_modificacion?: Date;
    imagen?: string;
    descripcion?: string;

}