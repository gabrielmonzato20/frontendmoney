import { AuthGardGuard } from './auth-gard.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SecurityRouterModule } from './security-routing.module';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MoneyInterceptor } from './money-http-interceptor';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    SecurityRouterModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () =>{
          return localStorage.getItem("token");
        },
        allowedDomains: ["localhost:8080"],
        disallowedRoutes: ["localhost:8080/oauth/token"]
      }
    }),



  ],
  exports:[LoginComponent],
  providers: [
    JwtHelperService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: MoneyInterceptor,
      multi:true
    },
    AuthGardGuard
  ]
})
export class SecurityModule { }
