import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonSeachComponent } from './person-seach/person-seach.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  {path: 'person', component:PersonSeachComponent},
  {path: 'person/new', component:PersonComponent},
  {path: 'person/:id',component:PersonComponent},

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class PeopleRouterModule { }
