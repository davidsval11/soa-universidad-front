import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CommonService } from './common.service';
import { Grupo } from '../models/grupo';

@Injectable({
  providedIn: 'root'
})
export class GrupoService extends CommonService<Grupo> {

  protected urlEndPoint:string ='http://localhost:8090/api/grupos';

  constructor(http:HttpClient,authService: AuthService) { 
    super(http,authService);
  }
}
