import { Curso } from './curso';
import { OpcionPregunta } from './opcion-pregunta';

export class Pregunta {
    id:number;
    curso:Curso;
    enunciado:string;
    foto:string;
    tipo_respuesta:number;
    puntos:number;
    create_at:string;
    opciones:Array<OpcionPregunta>=[];
}
