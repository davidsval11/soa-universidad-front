import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pregunta } from '../models/pregunta';
import { AuthService } from './auth.service';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService  extends CommonService<Pregunta>{

  protected urlEndPoint:string ='http://localhost:8090/api/preguntas';

  constructor(http:HttpClient,  authService: AuthService) { 
    super(http,authService);
  }
}
