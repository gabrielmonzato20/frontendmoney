import { ErrorHandleService } from './../core/error-handle.service';
import { HttpClient,HttpHeaders,HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LacamentSearch } from './lacament-search';
import * as moment from "moment";
@Injectable({
  providedIn: 'root'
})
export class LancamentServiceService {
  lacamentUrl="http://localhost:8080/lancaments"
  constructor(private http: HttpClient,private handleError:ErrorHandleService ) {}

  seach(filtro: LacamentSearch) : Promise<any>{
    let params:HttpParams =  new HttpParams();
    const headers:HttpHeaders = new HttpHeaders().append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    params = params.set('page', filtro.page.toString());
    params = params.set('size', filtro.iternsPerPage.toString());
    if (filtro.descricao) {
      params=params.set('describe', filtro.descricao);
    }
    if(filtro.datainit){
      params=params.set("dataVencFrom",moment(filtro.datainit).format("YYYY-MM-DD"))
    }
    if(filtro.dataFim){
      params=params.set("dataVencAt",moment(filtro.dataFim).format("YYYY-MM-DD"))
    }
    return this.http.get(`${this.lacamentUrl}?resume`,{ headers, params } ).toPromise()
    .then(resp =>{
    return  {
      lacaments:resp['content'],
      totElements: resp['totalElements']
  };
    }).catch(err => this.handleError.handle(err));
  }

  delete(id:number):Promise<void>{
    const headers:HttpHeaders = new HttpHeaders().append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.http.delete(`${this.lacamentUrl}/${id}`,{headers}).toPromise()
    .then(() => null)
    .catch(err => this.handleError.handle(err));
  }
}
