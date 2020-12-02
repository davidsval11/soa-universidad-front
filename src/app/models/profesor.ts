import { Generic } from './generic';

export class Profesor implements Generic {
    id!:number;
    n_documento!:string;
    nombres!:string;
    apellidos!:string;
    email!:string;
    telefono!:string;
    ciudad!:string;
    direccion!:string;
    create_at!:string;
}
