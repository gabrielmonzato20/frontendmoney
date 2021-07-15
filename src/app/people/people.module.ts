import { SharedModule } from './../shared/shared.module';
import { PersonGridComponent } from './person-grid/person-grid.component';
import { PersonSeachComponent } from './person-seach/person-seach.component';
import { PersonComponent } from './person/person.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [PersonComponent,PersonSeachComponent,PersonGridComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputNumberModule,
    InputMaskModule,
    FormsModule,
    SharedModule,
    HttpClientModule

  ],
  exports: [PersonComponent,PersonSeachComponent]
})
export class PeopleModule { }
