import { Component, OnInit } from '@angular/core';
import { Member } from '../../../models/member';
import { Team } from '../../../models/team';
import { Router } from '@angular/router';
import * as fromUser from '../../../user/state/user.reducer';
import * as fromMember from '../../../member/state/member.reducer';
import * as fromTeam from '../../../team/state/team.reducer';
import { Store, select } from '@ngrx/store';
import { User } from '../../../models/user';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import * as memberActions from '../../../member/state/member.actions';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {
  members$: Observable<Member[]>;
  teams$: Observable<Team[]>;
  isLoggedOn$: Observable<boolean>;

  constructor(private router: Router,
              private userStore: Store<fromUser.State>,
              private memberStore: Store<fromMember.MemberState>,
              private teamStore: Store<fromTeam.TeamState>) { }

  errorMessage = '';

  ngOnInit() {
    this.members$ = this.memberStore.pipe(select(fromMember.getMembers));
    this.teams$ = this.teamStore.pipe(select(fromTeam.getTeams));
    this.isLoggedOn$ = this.userStore.pipe(tap((data) => console.log(`Statusr: ${data.user.isLoggedOn}`)),
                                           select(fromUser.getStatus));

  }
}
