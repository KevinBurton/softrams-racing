import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { User } from '../../../models/user';
import { Router } from '@angular/router';
import * as fromUser from '../../../user/state/user.reducer';
import * as userActions from '../../../user/state/user.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  currentUser$: Observable<User>;
  error$: Observable<string>;
  isLoggedOn$: Observable<boolean>;

  constructor(private router: Router,
              private userStore: Store<fromUser.State>) { }

  ngOnInit(): void {
    this.currentUser$ = this.userStore.pipe(select(fromUser.getCurrentUser));
    this.error$ = this.userStore.pipe(select(fromUser.getError));
    this.isLoggedOn$ = this.userStore.pipe(select(fromUser.getStatus));
  }
  logout() {
    this.userStore.dispatch(new userActions.ClearCurrentUser());
    this.router.navigateByUrl('/home');
  }
}
