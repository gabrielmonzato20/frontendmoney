import { CoreModule } from './core/core.module';
import { PeopleModule } from './people/people.module';
import { LacamentModule } from './lacament/lacament.module';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { registerLocaleData } from '@angular/common';
import localePt from "@angular/common/locales/pt"

registerLocaleData(localePt)
@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LacamentModule,
    PeopleModule,
    CoreModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


