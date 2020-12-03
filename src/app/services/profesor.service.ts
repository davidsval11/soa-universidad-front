import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profesor } from '../models/profesor';
import { AuthService } from './auth.service';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService extends CommonService<Profesor> {

  protected urlEndPoint:string ='http://localhost:8090/api/profesores';

  constructor(http:HttpClient,  authService: AuthService) { 
    super(http,authService);
  }
}
