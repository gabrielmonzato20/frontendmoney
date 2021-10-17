import { Router } from '@angular/router';
import { LognServiceService } from './../logn-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginService: LognServiceService,private router:Router) { }

  ngOnInit(): void {

  }
  login(user:String , password:string){
    this.loginService.login(user,password)
    .then(resp => this.router.navigate(["/lancament"]));
  }

}
