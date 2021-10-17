import { environment } from './../../environments/environment';
import { Person } from './../core/model/Person.model';
import { ErrorHandleService } from './../core/error-handle.service';
import { PeopleSearch } from './people-search';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleServiceService {

  personUrl:string;
  constructor(private http:HttpClient,private errorHandle:ErrorHandleService) {
      this.personUrl = `${environment.apiUrl}/persons`;

  }

  search(filter:PeopleSearch):Promise<any>{
   let  params: HttpParams = new HttpParams();
   const headers:HttpHeaders = new HttpHeaders().append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

   params = params.set('page', filter.page.toString());
   params = params.set('size', filter.itensPerPage.toString());
   if(filter.name){
     params = params.set("name",filter.name)
   }
   return this.http.get(`${this.personUrl}`,{headers,params}).toPromise()
   .then(response =>{

    return {
      data:response['content'],
      totRecords: response['totalElements']
  }

 } )
   .catch(err=> {
    this.errorHandle.handle(err);
   })

  }
  findAll():Promise<any>{
    const headers:HttpHeaders = new HttpHeaders().append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.get(`${this.personUrl}/all`,{headers}).toPromise()
    .then(resp =>resp)
    .catch(err => this.errorHandle.handle(err));

  }
  delete(person:any):Promise<void>{
    let  params: HttpParams = new HttpParams();
    const headers:HttpHeaders = new HttpHeaders().append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.http.delete(`${this.personUrl}/${person.id}`,{headers}).toPromise()
    .then(resp => {
      return null
    }).catch(err =>{

        this.errorHandle.handle(err);

    })
  }

  changeStatus(id:number,status:boolean):Promise<void>{
    const headers:HttpHeaders = new HttpHeaders()
  .append("Content-Type","application/json");

    return this.http.put(`${this.personUrl}/${id}/active`,status,{headers}).toPromise()
    .then(resp => null)
    .catch(err => this.errorHandle.handle(err))
  }

  save(person:Person):Promise<Person | any>{
    const headers:HttpHeaders = new HttpHeaders()
    .append("Content-Type","application/json");
    return this.http.post<Person>(`${this.personUrl}`,person,{headers}).toPromise()
    .then(resp =>resp)
    .catch(err => {this.errorHandle.handle(err)});
  }
  findById(id:number):Promise<Person |any>{
    const headers:HttpHeaders = new HttpHeaders()
    .append("Content-Type","application/json");
    return this.http.get<Person>(`${this.personUrl}/${id}`,{headers}).toPromise()
    .then(response => response)
    .catch(err => this.errorHandle.handle(err));
  }
  update(person:Person):Promise<Person |any >{
    let headers:HttpHeaders = new HttpHeaders()
    .append("Content-Type","application/json");
    return this.http.put<Person>(`${this.personUrl}/${person.id}`,person,{headers}).toPromise()
    .then(resp => resp)
    .catch(err => this.errorHandle.handle(err))
  }
}
