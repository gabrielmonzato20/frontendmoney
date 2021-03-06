import { LognServiceService } from 'src/app/security/logn-service.service';
import {EventEmitter, Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-lacament-grid',
  templateUrl: './lacament-grid.component.html',
  styleUrls: ['./lacament-grid.component.css']
})
export class LacamentGridComponent {
  @Input() json: Array<Object> ;
  @Input()  page:number;
  @Input() totalRecords:number;
  @Input() RecordsperPage:number;
  @Output() methodLazy = new EventEmitter();
  @Output() methodDelete = new EventEmitter();
  @ViewChild("table") grid ;

  constructor(private authService:LognServiceService){

  }

  changePage(event:LazyLoadEvent){
    const currentPage :number= event.first!/event.rows!;

      this.methodLazy.emit( currentPage);
  }
  hasPermission(permission:string):Boolean{
    return this.authService.hasPermission(permission);
  }

   delete(lacament:any){

    this.methodDelete.emit({data:lacament,first:this.grid.first});
    this.grid.reset();

  }
}
