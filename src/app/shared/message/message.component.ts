import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
      <div *ngIf="hasError()"
       class="p-message p-message-error">
        {{message}}
        </div>
  `,
  styles: [
  ]
})
export class MessageComponent {

  @Input() error: string;
  @Input() control: FormControl;
  @Input()  message: string;

  hasError(): boolean{
    return this.control.hasError(this.error) &&  this.control.dirty;
  }
}
