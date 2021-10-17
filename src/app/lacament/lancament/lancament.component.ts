import { Title } from '@angular/platform-browser';
import { LancamentServiceService } from './../lancament-service.service';
import { FormControl } from '@angular/forms';
import { Lacament } from './../../core/model/Lacament.model';
import { PeopleServiceService } from './../../people/people-service.service';
import { CategoryServiceService } from './../../category/category-service.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lancament',
  templateUrl: './lancament.component.html',
  styleUrls: ['./lancament.component.css']
})
export class LancamentComponent implements OnInit


{
  lacament:Lacament = new Lacament();

  constructor(private categoryService:CategoryServiceService,private personService:PeopleServiceService
    ,private LacamentService:LancamentServiceService,private msgSerivce:MessageService,
    private router:ActivatedRoute,private route:Router,private title:Title){

  }
  categories = []
  ngOnInit(): void {
    let id :number | undefined = this.router.snapshot.params.id
    if(id){
      this.loadLancament(id)
    }
    this.allCategory();
    this.allPerson();
    this.title.setTitle("New Lancament")
    }

    loadLancament(id:number){
      this.LacamentService.findByID(id)
      .then(lacament =>{
         this.lacament = lacament
         this.updatetitle()
        return this.lacament;
      } )
      .catch(err => null)
    }
    get edit(){
      return Boolean(this.lacament.codigo)
    }
 	tips = [
    	{ label: 'Receita', value: 'RECEITA' },
    	{ label: 'Despesa', value: 'DESPESA' },
  			];

	persons = [
		]
  save(form:FormControl){
  if(this.edit){
this.editLancament(form);
  }else{
    this.saveLacament(form);
  }
  }
saveLacament(form:FormControl){


  this.LacamentService.save(this.lacament)
  .then((data) => {
   this.msgSerivce.add({detail:`Lacament ${data.codigo} save sucess`,severity:"success"});
   //form.reset();
   this.route.navigate(["/lancament"])
  })
  .catch(err => err)
}

editLancament(form:FormControl){
  this.LacamentService.update(this.lacament)
  .then(resp => {
    this.msgSerivce.add({detail:`Lacament ${this.lacament.codigo} updated sucessful`,severity:"success"})
    this.route.navigate(["/lancament"])
  })
  .catch(err =>err)
}
allCategory(){
  return this.categoryService.listAll().then(categories =>{
    this.categories = categories.map((cat) =>{
      return {label:cat.name,value:cat.id}
    })
  })
}
allPerson(){
  return this.personService.findAll()
  .then(persons=>{
    this.persons=persons.map(c =>({label:c.name,value:c.id}));
})
}

new(form:FormControl){
form.reset();
setTimeout((() => {
  this.lacament = new Lacament();

}).bind(this), 1);
this.route.navigate(['/lancament/new']);
}
updatetitle(){
  this.title.setTitle(`Update lacament ${this.lacament.codigo}` )
}

}
