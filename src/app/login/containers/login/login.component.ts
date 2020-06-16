import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../models/user';
import { LoginCredentials } from '../../../models/loginCredentials';

import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as fromUser from '../../../user/state/user.reducer';
import * as userActions from '../../../user/state/user.actions';

import { MessageService } from '../../../messages/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private messageService: MessageService,
              private store: Store<fromUser.State>,
              private router: Router) { }

  ngOnInit() {
  }

  login(credentials: LoginCredentials) {
      let user:User = { 
        name:{ 
          first: `${credentials.user} - ${credentials.password}`, 
          last: `${credentials.user} - ${credentials.password}`, 
        }
      };

      this.messageService.addMessage('Login');
      this.store.dispatch(new userActions.SetCurrentUser(user));

      this.router.navigate(['/members']);
  }
  cancel() {
    location.reload();
    //this.router.navigate(['']);
  }
}
