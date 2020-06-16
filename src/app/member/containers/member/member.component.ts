import { Component, OnInit } from '@angular/core';
import { Member } from '../../../models/member';
import { Router } from '@angular/router';
import * as fromUser from '../../../user/state/user.reducer';
import * as fromMember from '../../../member/state/member.reducer';
import { Store, select } from '@ngrx/store';
import { User } from '../../../models/user';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import * as memberActions from '../../../member/state/member.actions';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  members$: Observable<Member[]>;
  currentUser$: Observable<User>;
  error$: Observable<string>;
  isLoggedOn$: Observable<boolean>;

  constructor(private router: Router,
              private userStore: Store<fromUser.State>,
              private memberStore: Store<fromMember.MemberState>) { }

  errorMessage = '';

  ngOnInit() {
    this.memberStore.dispatch(new memberActions.LoadMembers());
    this.members$ = this.memberStore.pipe(select(fromMember.getMembers));
    this.currentUser$ = this.userStore.pipe(tap((data) => console.log(`Current User: ${data.user.currentUser.name.first}`)),
                                            select(fromUser.getCurrentUser));
    this.isLoggedOn$ = this.userStore.pipe(tap((data) => console.log(`Statusr: ${data.user.isLoggedOn}`)),
                                           select(fromUser.getStatus));

    this.error$ = this.memberStore.pipe(select(fromMember.getError));

  }
  deleteMember(member: Member) {
    this.router.navigate(['/members']);
  }
  addMember() {
    this.router.navigate(['/addMember']);
  }

}
