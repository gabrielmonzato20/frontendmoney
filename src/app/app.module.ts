import { SecurityModule } from './security/security.module';
import { AppRoutingModule } from './app-routing.module';
import { PersonComponent } from './people/person/person.component';
import { PersonSeachComponent } from './people/person-seach/person-seach.component';
import { LacamentSeachComponent } from './lacament/lacament-seach/lacament-seach.component';
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
import { Routes, RouterModule } from '@angular/router';
import { LancamentComponent } from './lacament/lancament/lancament.component';
import { PageNotFoundComponent } from './core/page-not-found.component';

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
    SecurityModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


