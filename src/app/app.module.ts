import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button'
import{TableModule} from 'primeng/table'
import{TooltipModule} from 'primeng/tooltip';
import { LacamentSeachComponent } from './lacament-seach/lacament-seach.component';
import { HeaderBarComponent } from './header-bar/header-bar.component'

@NgModule({
  declarations: [
    AppComponent,
    LacamentSeachComponent,
    HeaderBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
