import { LognServiceService } from 'src/app/security/logn-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { nextTick } from 'process';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGardGuard implements CanActivate {
  constructor(private authservice:LognServiceService,private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authservice.isAcessTokenExpirect()){
      return this.authservice.getNewAcessToken().then((data) =>{
        if(this.authservice.isAcessTokenExpirect()){
          this.router.navigate(['/login'])
          return false;
        }
        return true
      })
    }
      if(route.data.roles && !this.authservice.hasPermiision(route.data.roles) ){
      this.router.navigate(['/notauthorize'])
      return false;
    }
    return true;
  }

}
