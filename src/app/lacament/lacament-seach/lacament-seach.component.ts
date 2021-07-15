import { ErrorHandleService } from './../../core/error-handle.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { LacamentSearch } from '../lacament-search';
import { LancamentServiceService } from './../lancament-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lacament-seach',
  templateUrl: './lacament-seach.component.html',
  styleUrls: ['./lacament-seach.component.css']
})
export class LacamentSeachComponent implements OnInit {
  descricao: string;
  datafim:Date;
  datainit:Date;
  lacaments = [];
  totElements:number;
  filter : LacamentSearch
  constructor(private lacamentService:LancamentServiceService,private msgSerivce:MessageService,private confirmService:ConfirmationService) { }

  ngOnInit(): void {
   this.search();
   console.log(this.lacaments)
  }

  search(page:number = 0): Promise<any>{
    this.filter = {
      descricao:this.descricao,
      datainit: this.datainit,
      dataFim:this.datafim,
      iternsPerPage:5,
      page:page
    }
    return this.lacamentService.seach(this.filter)
    .then(result =>{
      this.totElements=result.totElements
     return this.lacaments=result.lacaments;

    })
  }
   confirmdelete(lacaments:any,reload:number){
    this.lacamentService.delete(lacaments.id).then(() =>{
      this.msgSerivce.add({severity:"success",detail:`Lancament ${lacaments.id} delete sucessful`});
      if(reload === 0 ){
        this.search()
      }
    })
  }
  public  delete(lacaments:any){
this.confirmService.confirm({
message:`Do you want exluid the lancament ${lacaments.data.id}`,
accept: () => {
  this.confirmdelete(lacaments.data,lacaments.first)
}

})

  }

  lazyPage(cuurentPage:number){
    return this.search(cuurentPage);
  }
}
