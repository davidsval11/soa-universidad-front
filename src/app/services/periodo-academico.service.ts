import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeriodoAcademico } from '../models/periodo-academico';
import { AuthService } from './auth.service';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class PeriodoAcademicoService extends CommonService<PeriodoAcademico> {

  protected urlEndPoint:string ='http://localhost:8090/api/periodosAcademicos';

  constructor(http:HttpClient,  authService: AuthService) { 
    super(http,authService);
  }
}
