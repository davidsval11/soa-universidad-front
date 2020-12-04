import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CommonService } from './common.service';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService extends CommonService<Curso> {

  protected urlEndPoint:string ='http://localhost:8090/api/cursos';

  constructor(http:HttpClient,authService: AuthService) { 
    super(http,authService);
  }
}

