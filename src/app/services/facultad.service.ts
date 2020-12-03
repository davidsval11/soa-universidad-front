import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Facultad } from '../models/facultad';
import { AuthService } from './auth.service';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class FacultadService extends CommonService<Facultad> {

  protected urlEndPoint:string ='http://localhost:8090/api/facultades';

  constructor(http:HttpClient,  authService: AuthService) { 
    super(http,authService);
  }
}

