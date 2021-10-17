import { environment } from './../../environments/environment';
import { ErrorHandleService } from './../core/error-handle.service';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  urlCatgeory:string;
  constructor(private http:HttpClient,private errorHandle:ErrorHandleService) {
this.urlCatgeory = `${environment.apiUrl}/categorys`;

   }

  listAll(): Promise<any>{
    const headers:HttpHeaders = new HttpHeaders();
    return this.http.get(`${this.urlCatgeory}`,{headers}).toPromise()
    .then((resp) => {
      return resp;
    })
    .catch(err=>{
      this.errorHandle.handle(err);
    })
  }
}
