import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  protected httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(protected http:HttpClient, protected authService: AuthService) { }

  listar():Observable<Curso[]>{
    return this.http.get<Curso[]>('http://localhost:8090/api/cursos')
  }
  
  listarPagina(page:string, size:string):Observable<any>{
    const params = new HttpParams()
    .set('page',page)
    .set('size',size)
    return this.http.get<any>('http://localhost:8090/api/cursos/pagina',{params:params});
  }
}
