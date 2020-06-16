import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './containers/login/login.component';
import { LoginDisplayComponent } from './components/login-display/login-display.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    LoginComponent,
    LoginDisplayComponent
  ]
})
export class LoginModule { }
