import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

import { User, Name } from '../../../models/user';

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

  private userValidationMessages = {
    required: 'Please enter your user name.',
    minLength: 'User name is too short.'
  };

  errorMessage: string;
  pageTitle = 'Log In';
  loginForm: FormGroup;
  userMessage: string;

  constructor(private fb: FormBuilder,
              private messageService: MessageService,
              private store: Store<fromUser.State>,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['',[Validators.required,Validators.minLength(3)]],
      password: ['',[Validators.required]]
    });
    const userNameControl = this.loginForm.get('userName');
    userNameControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      value => this.setUserMessage(userNameControl)
    );
  }

  login() {
    if (this.loginForm && this.loginForm.valid) {
      const userName = this.loginForm.get('userName').value;
      const password = this.loginForm.get('password').value;

      let user:User = { 
        name:{ 
          first: `${userName} - ${password}`, 
          last: `${userName} - ${password}`, 
        }};

      this.messageService.addMessage('Login');
      this.store.dispatch(new userActions.SetCurrentUser(user));

      this.router.navigate(['/members']);
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }
  setUserMessage(c: AbstractControl): void {
    this.userMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.userMessage = Object.keys(c.errors).map(
        key => this.userValidationMessages[key]).join(' ');
    }
  }
}
