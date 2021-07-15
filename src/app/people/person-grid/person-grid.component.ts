import { LazyLoadEvent } from 'primeng/api';
import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-person-grid',
  templateUrl: './person-grid.component.html',
  styleUrls: ['./person-grid.component.css']
})
export class PersonGridComponent {
  @Input() json: Array<Object> ;
  @Input() totRecords: number ;
  @Input() page:number;
  @Input() RecordsPerPage:number;
  @Output() methodLazy = new EventEmitter();
  @Output() changeStatus = new EventEmitter();
  @Output() deleteMethod = new EventEmitter();
  @ViewChild("table") grid ;
  lazySearch(event:LazyLoadEvent){
    this.methodLazy.emit((event.first / event.rows))
  }

  delete(person:any){
    this.deleteMethod.emit({person:person,reload:this.grid})

  }
  statusChange(person:any){
    person.active = !person.active;
    this.changeStatus.emit(person);
  }

}
