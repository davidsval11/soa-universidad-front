import { HttpClient, HttpHeaders,  HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Generic } from '../models/generic';

export abstract class CommonService<E extends Generic>{

  
  protected urlEndPoint!:string;
  protected httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(protected http:HttpClient) { }
  listar():Observable<E[]>{
    return this.http.get<E[]>(this.urlEndPoint)
  }
  ver(id:number):Observable<E>{
    return this.http.get<E>(`${this.urlEndPoint}/${id}`);
  }

  crear(entity:E):Observable<E>{
    return this.http.post<E>(this.urlEndPoint,entity,{headers: this.httpHeaders});  
  }

  modificar(entity:E):Observable<E>{
    return this.http.put<E>(`${this.urlEndPoint}/${entity.id}`,entity,{headers:this.httpHeaders});
  }

  eliminar(id:number):Observable<void>{
    return this.http.delete<void>(`${this.urlEndPoint}/${id}`, {headers:this.httpHeaders});
  }

  listarPagina(page:string, size:string):Observable<any>{
    const params = new HttpParams()
    .set('page',page)
    .set('size',size)
    return this.http.get<any>(`${this.urlEndPoint}/pagina`,{params:params});
  }
}
