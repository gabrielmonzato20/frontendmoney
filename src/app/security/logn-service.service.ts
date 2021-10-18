import { environment } from './../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorHandleService } from '../core/error-handle.service';

@Injectable({
  providedIn: 'root'
})
export class LognServiceService {
  urlLogin:String ;
  urllogout:String ;
  jwtdecode:any;
  constructor(private http: HttpClient,private errorHandle:ErrorHandleService,private jwthelper:JwtHelperService) {
    this.urlLogin = `${environment.apiUrl}/oauth/token`;
    this.urllogout = `${environment.apiUrl}/tokens/revoke`
    this.loadToken();
  }
  isAcessTokenExpirect(): Boolean{

    const token = localStorage.getItem("token");
    return !token || this.jwthelper.isTokenExpired(token);
  }


  login(email:String ,password:string):Promise<void>{
    const headers:HttpHeaders = new HttpHeaders()
    .append("Authorization","Basic QGFuZ3VsYXJAOkBuZ3VsQHI=")
    .append('Content-Type',"application/x-www-form-urlencoded");

    const body = `username=${email}&password=${password}&grant_type=password`
    return this.http.post(`${this.urlLogin}`,body,{headers}).toPromise()
    .then(data => this.decodetoken(data["access_token"]))
    .catch(err => this.errorHandle.handleLogin(new Response(err)));
  }
  logout():Promise<void>{

    return this.http.delete(`${this.urllogout}`,{withCredentials:true})
    .toPromise()
    .then(() => {{
      localStorage.removeItem("token");
      this.jwtdecode = null ;

    }}).catch(err => this.errorHandle.handleLogin(err));


  }

  decodetoken(jwt:string){
    this.jwtdecode = this.jwthelper.decodeToken(jwt);
    localStorage.setItem("token",jwt);
  }
  loadToken(){
    const token:string = localStorage.getItem("token");
    if(token){
      this.decodetoken(token);
    }
  }
  hasPermission(permission:string): Boolean{
    return this.jwtdecode && this.jwtdecode.authorities.includes(permission)
  }

  hasPermiision(permssions:Array<any>):Boolean{
   // for(const permssion of permssions){
     // if (this.hasPermiision(permssion)){
        return true;
    //  }


  //  }
   // return false;
  }
  getNewAcessToken():Promise<void>{
    const headers:HttpHeaders = new HttpHeaders()
    .append("Authorization","Basic QGFuZ3VsYXJAOkBuZ3VsQHI=")
    .append('Content-Type',"application/x-www-form-urlencoded");
    const body = 'grant_type=refresh_token';
    return this.http.post(`${this.urlLogin}`,body,{headers,withCredentials:true}).toPromise()
    .then(response =>{
      console.log(response);
      this.decodetoken(response['access_token'])
    })
    .catch(err =>{
      console.error("Error to refredh token");
      this.errorHandle.handleLogin(err);

    });
  }
}
