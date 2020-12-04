import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departamento } from '../models/departamento';
import { AuthService } from './auth.service';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService extends CommonService<Departamento>{

  protected urlEndPoint:string ='http://localhost:8090/api/departamentos';

  constructor(http:HttpClient,  authService: AuthService) { 
    super(http,authService);
  }
}
