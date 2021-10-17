import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { PeopleServiceService } from './../people-service.service';
import { Person } from './../../core/model/Person.model';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

person:Person = new Person();
constructor(private personService:PeopleServiceService,private msg:MessageService,private title:Title,
   private router:Router,private activerouter:ActivatedRoute){
}
  ngOnInit(): void {
    let id: number| undefined = this.activerouter.snapshot.params.id;
    if(id){
      this.loadPerson(id);
      this.updateTitle("Update Person "+ this.person.id)
    }else{
      this.updateTitle("New person")

    }

  }
  save(form:FormControl){
    if(!this.isEdit){
      this.savePerson();
    }else{
      this.updatePerson(this.person);
    }

  }
  get isEdit(){
    return Boolean(this.person.id)
  }
  updatePerson(person: Person) {
    this.personService.update(person)
    .then(data =>{this.msg.add({detail:`Person ${data.id} was update sucessful`,severity:"success"})
    this.router.navigate(["/person"]);

  } )
  }

  savePerson(){
    this.personService.save(this.person)
    .then(data => {
      this.msg.add({detail:`Person ${data.id} was save sucessful`,severity:"success"})
      this.router.navigate(["/person"]);

    })
    .catch(err => this.msg.add({detail:err,severity:"error"}))
  }

 loadPerson(id: number): void {
  this.personService.findById(id)
  .then(people => this.person=people)
  .catch(err => null);
}

updateTitle(msg:string){
  this.title.setTitle(msg);

}


}
