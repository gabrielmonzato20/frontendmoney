import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable, throwError } from "rxjs";
import { LognServiceService } from "./logn-service.service";
import { catchError, mergeMap } from 'rxjs/operators';
import { AuthExpireEcxeption } from "../core/auth-expire-ecxeption";


@Injectable()
export class MoneyInterceptor implements HttpInterceptor{

  constructor(private auth :LognServiceService){

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(!req.url.includes("/oauth/token")&& this.auth.isAcessTokenExpirect()
    &&!req.url.includes("/tokens/revoke") ){
      return from(this.auth.getNewAcessToken()).pipe(
                  mergeMap(() => {
                    req = req.clone({
                      setHeaders: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                      }
                    });

    return next.handle(req);
  })
).pipe(catchError(()=>throwError(new AuthExpireEcxeption() )));
}

return next.handle(req);
}

    }

