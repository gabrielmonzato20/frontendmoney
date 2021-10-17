import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LognServiceService } from 'src/app/security/logn-service.service';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
  showmenu:Boolean = false;
  constructor(private authservice:LognServiceService,private route:Router ) { }
  userloggin: String;
  ngOnInit(): void {
    this.userloggin= this.authservice.jwtdecode?.user_name
  }
  hasPermission(permission:string):Boolean{
    return this.authservice.hasPermission(permission);
  }
  logout():void{

    this.authservice.logout().then(() => this.route.navigate(["/login"]));
  }

}
