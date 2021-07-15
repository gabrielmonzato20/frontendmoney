import { ErrorHandleService } from './../core/error-handle.service';
import { PeopleSearch } from './people-search';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleServiceService {

  personUrl:string="http://localhost:8080/persons"
  constructor(private http:HttpClient,private errorHandle:ErrorHandleService) { }

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
    const headers:HttpHeaders = new HttpHeaders().append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
  .append("Content-Type","application/json");

    return this.http.put(`${this.personUrl}/${id}/active`,status,{headers}).toPromise()
    .then(resp => null)
    .catch(err => this.errorHandle.handle(err))
  }
}
