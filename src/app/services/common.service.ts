import { HttpClient, HttpHeaders,  HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Generic } from '../models/generic';
import { AuthService } from './auth.service';

export abstract class CommonService<E extends Generic>{

  
  protected urlEndPoint!:string;
  protected httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(protected http:HttpClient, protected authService: AuthService) { }
  listar():Observable<E[]>{
    return this.http.get<E[]>(this.urlEndPoint)
  }
  ver(id:number):Observable<E>{
    return this.http.get<E>(`${this.urlEndPoint}/${id}`,{headers:this.agregarAuthorizationHeader()});
  }

  crear(entity:E):Observable<E>{
    return this.http.post<E>(this.urlEndPoint,entity,{headers:this.agregarAuthorizationHeader()});
  }

  modificar(entity:E):Observable<E>{
    return this.http.put<E>(`${this.urlEndPoint}/${entity.id}`,entity,{headers:this.agregarAuthorizationHeader()});
  }

  eliminar(id:number):Observable<void>{
    return this.http.delete<void>(`${this.urlEndPoint}/${id}`, {headers:this.agregarAuthorizationHeader()});
  }

  listarPagina(page:string, size:string):Observable<any>{
    const params = new HttpParams()
    .set('page',page)
    .set('size',size)
    return this.http.get<any>(`${this.urlEndPoint}/pagina`,{params:params});
  }

  protected agregarAuthorizationHeader(){
    let token = this.authService.token;
    if(token != null){
      return this.httpHeaders.append('Authorization', 'Bearer '+token);
    }
    return this.httpHeaders;
  }
}
