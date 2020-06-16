import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { User } from '../models/user';
import * as fromUser from '../user/state/user.reducer';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  isLoggedOn$: Observable<boolean>;
  currentUser: User;

  constructor(private router: Router,
              private userStore: Store<fromUser.State>) {}

  ngOnInit() {
    this.isLoggedOn$ = this.userStore.pipe(select(fromUser.getStatus));
    this.userStore.pipe(select(fromUser.getCurrentUser)).subscribe(user => this.currentUser = user);
  }

  logout() {
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }
}
