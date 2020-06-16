import { Component, OnInit } from '@angular/core';
import { Team } from '../../../models/team';
import { Router } from '@angular/router';
import * as fromUser from '../../../user/state/user.reducer';
import * as fromTeam from '../../../team/state/team.reducer';
import { Store, select } from '@ngrx/store';
import { User } from '../../../models/user';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import * as teamActions from '../../../team/state/team.actions';

@Component({
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teams$: Observable<Team[]>;
  currentUser$: Observable<User>;
  isLoggedOn$: Observable<boolean>;
  error$: Observable<string>;

  constructor(private router: Router,
              private userStore: Store<fromUser.State>,
              private teamStore: Store<fromTeam.TeamState>) { }

  errorMessage = '';

  ngOnInit() {
    this.teamStore.dispatch(new teamActions.LoadTeams());
    this.teams$ = this.teamStore.pipe(select(fromTeam.getTeams));
    this.currentUser$ = this.userStore.pipe(tap((data) => console.log(`Current User: ${data.user.currentUser.name.first}`)),
                                            select(fromUser.getCurrentUser));
    this.isLoggedOn$ = this.userStore.pipe(tap((data) => console.log(`Status: ${data.user.isLoggedOn}`)),
                                           select(fromUser.getStatus));

    this.error$ = this.teamStore.pipe(select(fromTeam.getError));

  }
  removeTeam(team: Team) {
    this.router.navigate(['/teams']);
  }
  addTeam() {
    this.router.navigate(['/addTeam']);
  }

}
