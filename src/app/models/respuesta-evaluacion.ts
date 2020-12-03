import { IntentoEvaluacion } from './intento-evaluacion';
import { Pregunta } from './pregunta';

export class RespuestaEvaluacion {
    id:number;
    intentoEvaluacion:IntentoEvaluacion;
    pregunta:Pregunta;
    puntos:number;
    respuesta:string;
    create_at:string;
}
