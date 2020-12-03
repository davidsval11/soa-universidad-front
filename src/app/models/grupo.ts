import { Curso } from './curso';
import { Profesor } from './profesor';

export class Grupo {
    id:number;
    codigo:string;
    profesor:Profesor;
    curso:Curso;
    cupo_max:number;
    create_at:string;
}
