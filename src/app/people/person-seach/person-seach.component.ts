import { ConfirmationService, MessageService } from 'primeng/api';
import { PeopleSearch } from './../people-search';
import { PeopleServiceService } from './../people-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-seach',
  templateUrl: './person-seach.component.html',
  styleUrls: ['./person-seach.component.css']
})
export class PersonSeachComponent implements OnInit {

  persons = [];
  filter:PeopleSearch = {
    name:"",
    itensPerPage:5,
    page:0,
  };
  totRecords:number;
  constructor(private service:PeopleServiceService,private dialog:ConfirmationService,private msg:MessageService){}

  ngOnInit(): void {
    this.search();
  }

  search(page:number = 0):Promise<any>{
    this.filter.page= page;
    return this.service.search(this.filter).then(peaple => {
      this.persons=peaple.data;
      this.totRecords= peaple.totRecords
    })

  }

  lazyPage(cuurentPage:number){
    this.search(cuurentPage);
  }
  deleteConfirm(person:any, reload:any){
    this.service.delete(person).then(() =>{
      this.msg.add({severity:"success",detail:`Person ${person.name} was delete sucessuf `});
      if(reload.first === 0){
        this.search();
      }else{
        reload.reset();
      }
    })
  }

  delete(data:any){
    this.dialog.confirm({
      message:`Do you want delete the perosn ${data.person.name}`,
      accept:() => this.deleteConfirm(data.person, data.reload)
    })
  }
  changeStatus(person:any){
    this.service.changeStatus(person.id,person.active).then(() =>{
      this.msg.add({severity:"success",detail:`Person ${person.name} was the status change to ${person.active?"Active":"Disable"}`})
    }).catch(err =>{
      this.msg.add({severity:"error",detail:`Person ${person.name} was not the status change to ${person.active?"Active":"Disable"}`})

    })
  }
}
