import { ErrorHandleService } from './../core/error-handle.service';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  urlCatgeory = "http://localhost:8080/categorys"
  constructor(private http:HttpClient,private errorHandle:ErrorHandleService) { }

  listAll(): Promise<any>{
    const headers:HttpHeaders = new HttpHeaders().append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.http.get(`${this.urlCatgeory}`,{headers}).toPromise()
    .then((resp) => {
      return resp;
    })
    .catch(err=>{
      this.errorHandle.handle(err);
    })
  }
}
