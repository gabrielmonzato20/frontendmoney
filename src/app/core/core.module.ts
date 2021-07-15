import { ErrorHandleService } from './error-handle.service';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';



@NgModule({
  declarations: [HeaderBarComponent],
  imports: [
    CommonModule,
    ToastModule,
    ConfirmDialogModule
  ],
  exports: [
    HeaderBarComponent,
    ToastModule,
    ConfirmDialogModule],
  providers:[
    ErrorHandleService,
    MessageService,
    ConfirmationService
  ]
})
export class CoreModule { }
