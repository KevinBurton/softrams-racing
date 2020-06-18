import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromUser from '../user/state/user.reducer';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {

  isLoggedOn$: Observable<boolean>;

  constructor(private userStore: Store<fromUser.UserState>) { }
  ngOnInit() {
    this.isLoggedOn$ = this.userStore.pipe(select(fromUser.getStatus));
  }
}
