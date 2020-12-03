import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evaluacion } from '../models/evaluacion';
import { AuthService } from './auth.service';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionService extends CommonService<Evaluacion> {

  protected urlEndPoint:string ='http://localhost:8090/api/evaluaciones';

  constructor(http:HttpClient, authService: AuthService) { 
    super(http,authService);
  }
}

