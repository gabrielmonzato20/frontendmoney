import { LancamentServiceService } from './../lancament-service.service';
import { FormControl } from '@angular/forms';
import { Lacament } from './../../core/model/Lacament.model';
import { PeopleServiceService } from './../../people/people-service.service';
import { CategoryServiceService } from './../../category/category-service.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-lancament',
  templateUrl: './lancament.component.html',
  styleUrls: ['./lancament.component.css']
})
export class LancamentComponent implements OnInit


{
  lacament:Lacament = new Lacament();

  constructor(private categoryService:CategoryServiceService,private personService:PeopleServiceService
    ,private LacamentService:LancamentServiceService,private msgSerivce:MessageService){

  }
  categories = []
  ngOnInit(): void {

    this.allCategory();
    this.allPerson();
    }
 	tips = [
    	{ label: 'Receita', value: 'RECEITA' },
    	{ label: 'Despesa', value: 'DESPESA' },
  			];

	persons = [
		{label:"Jose",value:1	},
		{label:"Maria",value:2},
		{label:"Jão",value:3},
		{label:"tkgod",value:4}
		]
save(form:FormControl){
  console.log(this.lacament);
  console.log(form);

  this.LacamentService.save(this.lacament)
  .then((data) => {
   this.msgSerivce.add({detail:`Lacament ${data.codigo} save sucess`,severity:"success"});
   form.reset();
  })
  .catch(err => err)
}
allCategory(){
  return this.categoryService.listAll().then(categories =>{
    this.categories = categories.map((cat) =>{
      return {label:cat.name,value:cat.codigo}
    })
  })
}
allPerson(){
  return this.personService.findAll()
  .then(persons=>{
    this.persons=persons.map(c =>({label:c.name,value:c.id}));
})
}
}
