import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ErrorHandleService } from './error-handle.service';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PageNotFoundComponent } from './page-not-found.component';
import { PageNotAuthorizeComponent } from './page-not-authorize.component';



@NgModule({
  declarations: [HeaderBarComponent, PageNotFoundComponent, PageNotAuthorizeComponent],
  imports: [
    CommonModule,
    ToastModule,
    ConfirmDialogModule,
    RouterModule
  ],
  exports: [
    HeaderBarComponent,
    ToastModule,
    ConfirmDialogModule],
  providers:[
    ErrorHandleService,
    MessageService,
    ConfirmationService,
    Title
  ]
})
export class CoreModule { }
