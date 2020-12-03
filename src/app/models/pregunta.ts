import { Curso } from './curso';

export class Pregunta {
    id:number;
    curso:Curso;
    enunciado:string;
    foto:string;
    tipo_respuesta:number;
    puntos:number;
    create_at:string;
}
