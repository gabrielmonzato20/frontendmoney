import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LacamentSeachComponent } from './lacament-seach/lacament-seach.component';
import { LacamentGridComponent } from './lacament-grid/lacament-grid.component';
import { LancamentComponent } from './lancament/lancament.component';
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
import { LacamentRoutingModule } from './lacament-routing.module';



@NgModule({
  declarations: [
    LacamentSeachComponent,
    LancamentComponent,
    LacamentGridComponent
  ],
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
    HttpClientModule,
    LacamentRoutingModule
  ],
  exports: [
    LancamentComponent,
    LacamentSeachComponent

  ]
})
export class LacamentModule { }
