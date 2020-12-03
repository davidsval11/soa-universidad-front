import { Estudiante } from './estudiante';
import { Evaluacion } from './evaluacion';

export class IntentoEvaluacion {
    id:number;
    evaluacion:Evaluacion;
    estudiante:Estudiante;
    puntos:number;
    calificacion:number;
    create_at:string;
}
