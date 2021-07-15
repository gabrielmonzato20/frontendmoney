import { MessageService } from 'primeng/api';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandleService {
  private msgservice;
  constructor(msgSerive:MessageService,) {
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
  }
  this.msgservice.add({severity:"error",detail:msg});
}
}
