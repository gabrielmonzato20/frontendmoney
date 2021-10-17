import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthExpireEcxeption } from './auth-expire-ecxeption';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandleService {
  private msgservice;
  constructor(msgSerive:MessageService,private router:Router) {
    this.msgservice=msgSerive;
  }

  handle(errorResponse:any){
  let msg ;
  if(typeof errorResponse === 'string'){
    msg=errorResponse;
  }else if(errorResponse instanceof HttpErrorResponse &&
    errorResponse.status >=400 && errorResponse.status <=499){
    msg="Error ao processar requisiçaõ "
  try{
    msg = errorResponse.error[0].msgUser;
  }catch(e){};
  }else if (errorResponse instanceof AuthExpireEcxeption){
    msg = "Sua sessaõ experiou por favor faça o login novamente ";
    this.router.navigate(['/login'])
  }
  this.msgservice.add({severity:"error",detail:msg});
}
handleLogin(errorResponse:Response){
  let msg: Promise<any> ;
  if(errorResponse.status === 400){
     if(errorResponse.body['error']==="ivalid_grant"){
      msg =  Promise.reject("Invalid user or Password");
     }
  }
   msg = Promise.reject(errorResponse);
  this.handle(msg)
  }
}
