import { Component, OnInit } from '@angular/core';
import { Member } from '../../../models/member';
import { Router } from '@angular/router';
import * as fromUser from '../../../user/state/user.reducer';
import * as fromMember from '../../../member/state/member.reducer';
import { Store, select } from '@ngrx/store';
import { User } from '../../../models/user';
import { Observable } from 'rxjs';

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

  ngOnInit() {
    this.memberStore.dispatch(new memberActions.LoadMembers());
    this.members$ = this.memberStore.pipe(select(fromMember.getMembers));
    this.currentUser$ = this.userStore.pipe(select(fromUser.getCurrentUser));
    this.isLoggedOn$ = this.userStore.pipe(select(fromUser.getStatus));

    this.error$ = this.memberStore.pipe(select(fromMember.getError));

  }
  deleteMember(memberId: number) {
    this.memberStore.dispatch(new memberActions.DeleteMember(memberId));
    this.router.navigate(['/members']);
  }
  addMember() {
    this.router.navigate(['/addMember']);
  }

}
