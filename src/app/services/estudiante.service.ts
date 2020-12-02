import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estudiante } from '../models/estudiante';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService extends CommonService<Estudiante> {

  protected urlEndPoint:string ='http://localhost:8090/api/estudiantes';

  constructor(http:HttpClient) { 
    super(http);
  }
}
