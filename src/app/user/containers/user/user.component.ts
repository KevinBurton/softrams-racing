import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromUser from '../../../user/state/user.reducer';
import * as userActions from '../../../user/state/user.actions';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users$: Observable<User[]>;
  error$: Observable<string>;

  constructor(private userStore: Store<fromUser.State>) { }

  ngOnInit(): void {
    this.users$ = this.userStore.pipe(select(fromUser.getUsers));
    this.error$ = this.userStore.pipe(select(fromUser.getError));
    this.userStore.dispatch(new userActions.LoadUsers());
  }
}
