import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MessageComponent } from './message.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'messages',
        component: MessageComponent,
        outlet: 'popup'
      }
    ]),
    SharedModule
  ],
  declarations: [
    MessageComponent
  ]
})
export class MessageModule { }
