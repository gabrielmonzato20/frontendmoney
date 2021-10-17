import { environment } from './../../environments/environment';
import { Lacament } from './../core/model/Lacament.model';
import { ErrorHandleService } from './../core/error-handle.service';
import { HttpClient,HttpHeaders,HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LacamentSearch } from './lacament-search';
import * as moment from "moment";
@Injectable({
  providedIn: 'root'
})
export class LancamentServiceService {
  lacamentUrl:string;
  constructor(private http: HttpClient,private handleError:ErrorHandleService ) {
    this.lacamentUrl = `${environment.apiUrl}/lancaments`
  }

  seach(filtro: LacamentSearch) : Promise<any>{
    let params:HttpParams =  new HttpParams();
    const headers:HttpHeaders = new HttpHeaders();
    params = params.set('page', filtro.page.toString());
    params = params.set('size', filtro.iternsPerPage.toString());
    if (filtro.descricao) {
      params=params.set('describe', filtro.descricao);
    }
    if(filtro.datainit){
      params=params.set("dataVencFrom",moment(filtro.datainit).format("YYYY-MM-DD"));
    }
    if(filtro.dataFim){
      params=params.set("dataVencAt",moment(filtro.dataFim).format("YYYY-MM-DD"));
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
    const headers:HttpHeaders = new HttpHeaders()
    .append('Content-Type', 'application/json');

    return this.http.delete(`${this.lacamentUrl}/${id}`,{headers}).toPromise()
    .then(() => null)
    .catch(err => this.handleError.handle(err));
  }

  save(lacament:Lacament) :Promise<any>{
    const headers:HttpHeaders = new HttpHeaders();
    return this.http.post<Lacament>(`${this.lacamentUrl}`,lacament,{headers}).toPromise()
    .then(resp => resp)
    .catch(err => this.handleError.handle(err));
  }

  findByID(id:number): Promise<Lacament>{
    const headers:HttpHeaders = new HttpHeaders()
    return this.http.get<Lacament>(`${this.lacamentUrl}/${id}`,{headers}).toPromise()
    .then(resp => {
      let lancament  =resp;

      this.convertStringToDate([lancament])

      return lancament;
    })
    }

  update(lacament:Lacament):Promise<Lacament>{
    const headers:HttpHeaders = new HttpHeaders();
    return this.http.put(`${this.lacamentUrl}`,lacament,{headers}).toPromise()
    .then(resp => resp['data'])
    .catch(err => this.handleError.handle(err));

  }

  convertStringToDate(lacaments:Lacament[]){
    lacaments.forEach(lanc => {
      lanc.dataVencimento = moment(lanc.dataVencimento).toDate()
      if(lanc.dataPagamento){
        lanc.dataPagamento = moment(lanc.dataPagamento).toDate()

      }
    })

  }

  }

