import { Departamento } from './departamento';
import { Grupo } from './grupo';
import { PeriodoAcademico } from './periodo-academico';

export class Curso {
    id:number;
    codigo:string;
    nombre:string;
    descripcion:string;
    periodoAcademico:PeriodoAcademico;
    departamento:Departamento;
    create_at:string;
    grupos:Array<Grupo>=[];
}
