import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromUser from './user/state/user.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'softrams-racing';
  isLoggedOn$: Observable<boolean>;

  constructor(private userStore: Store<fromUser.State>) {
  }

  ngOnInit(): void {
    this.isLoggedOn$ = this.userStore.pipe(select(fromUser.getStatus));
  }
}
